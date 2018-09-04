const exec = require('child_process').exec;
const CLI         = require('clui')
const Spinner     = CLI.Spinner;

module.exports = {
  addDependency:() => {
    const status = new Spinner('Installing ember-cli-addon-docs as a dependency, please wait ...');
    status.start();

    dir = exec("ember install ember-cli-addon-docs", function(err, stdout, stderr) {
      if (err) {
        status.stop();
        console.error(err); 
      }
      status.stop();
      console.log('\n✅ ember-cli-addon-docs added as dependency');

      // Setup route stuff
    });
    
    dir.on('exit', function (code) {
      status.stop();
    });
  }

}