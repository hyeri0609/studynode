var fs = require("fs");
var path = require("path");

var dir = process.argv[2].toString();
var ext = process.argv[3].toString();

fs.readdir(dir, (err, data) => {
  if (err) throw err;
  for (var i = 0; i < data.length; i++) {
    if (path.extname(data[i]) == '.'+ext) {
      console.log(data[i]);
    }
  }
});