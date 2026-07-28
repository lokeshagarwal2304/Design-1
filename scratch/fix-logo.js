const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, '..', 'public', 'logo-text.png');
  console.log(`Loading image from ${filePath}...`);
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  let clearedCount = 0;
  
  // 1. Clear Y: 0..1 for X: 90..140
  for (let y = 0; y <= 1; y++) {
    for (let x = 90; x <= 140; x++) {
      const idx = (width * y + x) * 4;
      if (image.bitmap.data[idx + 3] > 0) {
        image.bitmap.data[idx + 3] = 0; // Set alpha to 0
        clearedCount++;
      }
    }
  }
  
  // 2. Clear Y: 2..4 for X: 108..133 (above the short letters 'e', 'e')
  for (let y = 2; y <= 4; y++) {
    for (let x = 108; x <= 133; x++) {
      const idx = (width * y + x) * 4;
      if (image.bitmap.data[idx + 3] > 0) {
        image.bitmap.data[idx + 3] = 0; // Set alpha to 0
        clearedCount++;
      }
    }
  }
  
  console.log(`Cleared ${clearedCount} stray pixels above "Steel".`);
  
  await image.write(filePath);
  console.log(`Successfully saved the fixed image to ${filePath}`);
}

main().catch(console.error);
