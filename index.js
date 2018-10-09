const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const inquirer  = require('./lib/inquirer');
const audit = require('./lib/audit');

const run = async () => {
  const action = await inquirer.menu();

  if (action.menu === "Run audit") {
    audit.start();
  }
}

clear();
console.log(
  chalk.yellow(
    figlet.textSync('nice docs', { horizontalLayout: 'full' })
  )
);

run();
