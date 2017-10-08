var argv = process.argv;
var res = 0;
for (var i = 2; i < argv.length; i++) {
    res += +argv[i];
}
console.log(res.toString());
