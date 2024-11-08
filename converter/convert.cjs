const sharp = require('sharp');
const fs = require('fs');
function Convert(filename, title) {
  const inputFile = `./images/${filename}`;
  const outputFile = `../public/${filename}.webp`;
  const img = sharp(inputFile).toFormat('webp');
  img.toFile(outputFile, (err, info) => {
    if (err) {
      console.error('Error converting image:', err);
    } else {
      console.log('Image converted successfully:', info);
      fs.unlinkSync(inputFile);
      fs.readFile(
        '../src/meta.json',
        'utf8',
        function readFileCallback(err, data) {
          const newMeta = {
            ...JSON.parse(data),
            [filename]: {
              title,
              file: `${filename}.webp`,
              date: new Date().toLocaleString(),
            },
          };
          fs.writeFileSync(
            '../src/meta.json',
            JSON.stringify(newMeta, null, 4)
          );
        }
      );
    }
  });
}
module.exports = { Convert };
