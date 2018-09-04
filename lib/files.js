const fs = require('fs');
const path = require('path');
const _           = require('lodash');
const touch = require('touch');

module.exports = {
  getCurrentDirectoryBase : () => {
    return path.basename(process.cwd());
  },

  directoryExists : (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  createContribution:() => {
    const filelist = fs.readdirSync('.');
    if (filelist.includes('CONTRIBUTING.md')) {
      console.log('\nA CONTRIBUTING.md already exists.');
    } else {
      touch('CONTRIBUTING.md');
      console.log('\n✅ Created CONTRIBUTING.md');
    }
  }
};
