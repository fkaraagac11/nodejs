var readline = require("readline");
var fs = require("fs");

var myInterface = readline.createInterface({
    input: fs.createReadStream("./counter.html"),
});

var lineno = 0;
myInterface.on("line", function (line) {
    lineno++;
    console.log("Line number " + lineno + ": " + line);
});
