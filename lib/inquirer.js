const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  menu: () => {
    const questions = [
      {
        name: 'menu',
        type: 'list',
        choices: ['Run audit'],
        message: 'What do you want to do?',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a version.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },

  askRepo: () => {
    const question = [
      {
        name: 'repo',
        type: 'input',
        message: 'please type user/repo of the addon. (E.g. kennethlarsen/ember-addon)',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a user/repo';
          }
        }
      }
    ];
    return inquirer.prompt(question); 
  }


}
