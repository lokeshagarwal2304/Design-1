const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, '..', 'public', 'logo-text.png');
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Analyzing logo-text.png for Y=0 and Y=1...`);
  
  for (let y = 0; y < 4; y++) {
    let activeIntervals = [];
    let start = -1;
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 10) {
        if (start === -1) start = x;
      } else {
        if (start !== -1) {
          activeIntervals.push(`[${start}..${x-1}]`);
          start = -1;
        }
      }
    }
    if (start !== -1) {
      activeIntervals.push(`[${start}..${width-1}]`);
    }
    console.log(`Y=${y}: ${activeIntervals.join(', ')}`);
  }
}

main().catch(console.error);
