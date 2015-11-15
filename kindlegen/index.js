var through = require('through2');
var Path = require('path');
var exec = require('child_process').exec, child;

function kindlegen(){

    function parsePath(path) {
      var extname = Path.extname(path);
      return {
        folder: Path.dirname(path),
        file: Path.basename(path)
      };
    }


    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
          // return empty file
          return cb(null, file);
        }
        if (file.isBuffer()) {
          var path = parsePath(file.path);
          var script = 'cd '+ path.folder +' && kindlegen '+path.file;
          console.log(script);
          exec(script, function (error, stdout, stderr) {
            console.log(stdout, stderr);
          });
        }
        if (file.isStream()) {
          console.log(this);
        }
        cb(null, file);

      });
}

module.exports = kindlegen;