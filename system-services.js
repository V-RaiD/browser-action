const { exec } = require('child_process');
const { spawn } = require('child_process');
exports.run = function (command, options) {
  exec(command, options, function (err, stdout, stderr) {
    if (err) {
      console.log(err);
    } else {
      console.log("STDOUT : ", stdout);
      console.log("STDERR : ", stderr);
    }
  });
}

exports.fork = function(command, args, options) {
  return spawn(command, args, {shell:true, detached:true});
}
