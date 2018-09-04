const inquirer   = require('inquirer');
const files      = require('./files');

module.exports = {

  menu: () => {
    const questions = [
      {
        name: 'menu',
        type: 'list',
        choices: ['Setup documentation', 'Start audit'],
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

  auditMenu: () => {
    const questions = [
      {
        name: 'menu',
        type: 'list',
        choices: ['Setup documentation', 'Start audit'],
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
  }


}
