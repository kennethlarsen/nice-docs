const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');
const bootstrap = require('./lib/bootstrap');
const audit = require('./lib/audit');

const run = async () => {
  const action = await inquirer.menu();
  console.log(action);

  if (action.menu === "Setup documentation") {
    bootstrap.createDocSetup();
  }

  if (action.menu === "Run audit") {
    audit.start();
  }
}

clear();
console.log(
  chalk.yellow(
    figlet.textSync('ember-docbox', { horizontalLayout: 'full' })
  )
);

run();
