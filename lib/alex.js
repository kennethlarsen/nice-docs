const exec = require('child_process').exec;
const CLI         = require('clui')
const Spinner     = CLI.Spinner;

module.exports = {
  addDependency:() => {
    const status = new Spinner('Installing alex as a dependency ...');
    status.start();

    dir = exec("ember install ember-cli-alex", function(err, stdout, stderr) {
      if (err) {
        status.stop();
        console.error(err); 
      }
      status.stop();
      console.log('\n✅ alex added as dependency');
    });
    
    dir.on('exit', function (code) {
      status.stop();
    });
  }
}