const { Jimp } = require('jimp');
const path = require('path');

async function checkImage(filename) {
  const filePath = path.join(__dirname, '..', 'public', filename);
  console.log(`Loading ${filename}...`);
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  // Find bounding box of non-transparent pixels
  let minX = width, minY = height, maxX = 0, maxY = 0;
  let hasPixels = false;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 5) { // not fully transparent
        hasPixels = true;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  if (hasPixels) {
    console.log(`${filename} bounds of content: X: ${minX}..${maxX}, Y: ${minY}..${maxY} (width: ${maxX - minX + 1}, height: ${maxY - minY + 1})`);
  } else {
    console.log(`${filename} is fully transparent!`);
  }
}

async function main() {
  await checkImage('m2-logo-only.png');
  await checkImage('logo-text.png');
}

main().catch(console.error);
