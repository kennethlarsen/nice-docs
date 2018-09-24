const exec = require('child_process').exec;
const CLI         = require('clui')
const Spinner     = CLI.Spinner;

module.exports = {
  runAnalysis: () => {
    const status = new Spinner('Analyzing content for inconsiderate writing ...');
    status.start();

    dir = exec("npx alex ember-sinon-qunit", function(err, stdout, stderr) {
      if (err) {
        status.stop();
        console.error(err); 
      }
      status.stop();
      console.log('\n✅ finished analyzing with alex');
      console.warn(`\n-------------\n ${stderr}`);
    });
    
    dir.on('exit', function (code) {
      status.stop();
    });
  }
}