// init.js

const { execSync } = require('child_process');

console.log('Installing dependencies...');

// Gerekli bağımlılıkları yükleyin
const dependencies = [
  'cors',
  'dotenv',
  'express',
  'express-validator',
  'helmet',
  'http-status-codes',
  'jsonwebtoken',
  'md5',
  'multer',
  'nodemon',
  'winston',
  'winston-daily-rotate-file',
];

dependencies.forEach((dependency) => {
  execSync(`npm install --progress=true ${dependency}`);
  console.log(`Installed: ${dependency}`);
});

console.log('Dependencies installed successfully.');
