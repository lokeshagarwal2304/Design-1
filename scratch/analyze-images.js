const fs = require('fs');
const path = require('path');

// A simple PNG parser to check non-transparent pixel coordinates
function analyzePng(filename) {
  const filePath = path.join(__dirname, '..', 'public', filename);
  console.log(`Analyzing ${filePath}...`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const buf = fs.readFileSync(filePath);
  // PNG signature check
  if (buf.readUInt32BE(0) !== 0x89504E47) {
    console.log('Not a valid PNG');
    return;
  }
  
  // Let's read IHDR chunk
  let pos = 8;
  let width = 0, height = 0;
  while (pos < buf.length) {
    const length = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IHDR') {
      width = buf.readUInt32BE(pos + 8);
      height = buf.readUInt32BE(pos + 12);
      console.log(`Dimensions: ${width}x${height}`);
      break;
    }
    pos += 12 + length;
  }
}

analyzePng('m2-logo-only.png');
analyzePng('logo-text.png');
