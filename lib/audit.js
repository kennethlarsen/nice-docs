const inquirer  = require('./inquirer');
const alex = require('./alex');
const CLI         = require('clui')
const Spinner     = CLI.Spinner;
const exec = require('child_process').exec;

module.exports = {
  start: async () => {
    let audit = await inquirer.askRepo();

    const status = new Spinner('Fetching addon ...');
    status.start();

    dir = exec(`git clone --depth 1 https://github.com/${audit.repo}.git`, function(err, stdout, stderr) {
      if (err) {
        status.stop();
        console.error(err);
      }
      status.stop();
      console.log('\n✅ Addon successfully cloned');
      alex.runAnalysis();
    });
    
    dir.on('exit', function (code) {
      status.stop();
    });
  }
  // search all addons (via observer?)
  // git clone shallow stuff + npx analysis
  // github issue ready template
}