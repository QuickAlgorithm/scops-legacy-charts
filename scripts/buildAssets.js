const fg = require('fast-glob');
const fs = require('fs-extra');


console.log('Copying asset files from `src` to {lib,esm}...');

const assets = fg.sync([`./src/**/*.{png,gif,jpg,css,geojson}`]);
assets.forEach(filePath => {
  const newPaths = ['lib', 'esm'].map(dir => filePath.replace(`./src`, `./${dir}`));
  newPaths.forEach(p => {
    fs.copy(filePath, p, err => {
      if (err) {
        console.error(err);
      }
    });
  });
});
console.log(
  `  Copied ${assets.length.toString().padStart(2)} asset files  `
);
