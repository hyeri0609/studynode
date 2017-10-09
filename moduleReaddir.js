var fs = require("fs");
var path = require("path");

module.exports = function (dir, ext, callback) { 
    fs.readdir(dir, (err, data) => {
      if (err) throw err;
      for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) == '.'+ext) {
          console.log(data[i]);
        }
      }
    });
}