const { Jimp } = require('jimp');
const path = require('path');

async function main() {
  const filePath = path.join(__dirname, '..', 'public', 'logo-text.png');
  const image = await Jimp.read(filePath);
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Analyzing logo-text.png (dimensions: ${width}x${height})...`);
  
  // Print map of alpha values around X=70..130, Y=0..10
  for (let y = 0; y < 12; y++) {
    let row = '';
    for (let x = 65; x < 135; x++) {
      const idx = (width * y + x) * 4;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 200) {
        row += '#';
      } else if (alpha > 50) {
        row += '.';
      } else {
        row += ' ';
      }
    }
    console.log(`Y=${y.toString().padStart(2, '0')}: ${row}`);
  }
}

main().catch(console.error);
