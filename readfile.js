var fs = require("fs");

var argv = process.argv[2].toString();

// var buf = fs.readFileSync(argv);
// var a = buf.toString().split('\n');
// console.log((a.length-1).toString());

fs.readFile(argv, (err, data) => {
  if (err) throw err;
  console.log(data.toString().split('\n').length - 1);
});