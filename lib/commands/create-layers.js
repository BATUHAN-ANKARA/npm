// lib/commands/create-layers.js

const fs = require('fs');
const path = require('path');

function createLayers() {
  const layers = ['services', 'controllers', 'configs', 'dal', 'dto', 'middlewares', 'utils', 'uploads', 'jsons', 'db', 'routers'];
  layers.forEach((layer) => {
    const layerPath = path.join(process.cwd(), layer);
    if (!fs.existsSync(layerPath)) {
      fs.mkdirSync(layerPath);
      console.log(`Created ${layer} directory.`);
      const indexPath = path.join(layerPath, 'index.js');
      fs.writeFileSync(indexPath, '// Your updated index.js content here\n');
      console.log(`Created ${layer}/index.js file.`);
    } else {
      console.log(`${layer} directory already exists.`);
    }
  });
  require(path.join(process.cwd(), 'init.js'));
}

module.exports = createLayers;
