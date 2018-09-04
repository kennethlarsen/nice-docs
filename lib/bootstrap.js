const inquirer   = require('inquirer');
const utils = require('./utils');

module.exports = {
  createDocSetup: async () => {
    const choices = ['Add alex', 'create CONTRIBUTION.md', 'ember-cli-addon-docs'];
    const questions = [
      {
        name: 'bootstrap',
        type: 'checkbox',
        choices: choices,
        default: choices,
        message: 'What would like included in your addon?',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a version.';
          }
        }
      }
    ];
    const settings = await inquirer.prompt(questions);

    utils.applySettings(settings, 'bootstrap');
  }
}