const alex = require('./alex');
const files = require('./files');
const addonDocs = require('./addonDocs');

module.exports = {

  applySettings: async(settings) => {
    let settingsArray = settings.bootstrap;

    for (let setting of settingsArray) {
      if (setting === "Add alex") {
        await alex.addDependency();
      }

      if (setting === "create CONTRIBUTION.md") {
        await files.createContribution();
      }

      if (setting === "ember-cli-addon-docs") {
        await addonDocs.addDependency();
      }
    };
  }
}