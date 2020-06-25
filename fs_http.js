// HTML fs - http

// const http = require("http");
// const fs = require("fs");
// http.createServer((req, res) => {
//     const readStream = fs.createReadStream("./counter.html");
//     res.writeHead(200, { "Content-type": "text/html" });
//     readStream.pipe(res);
// }).listen("3000");

// JSON fs - http
// const http = require("http");
// const fs = require("fs");
// http.createServer((req, res) => {
//     console.log(req);
//     const readStream = fs.createReadStream("./jsonex.json");
//     res.writeHead(200, { "Content-type": "application/json" });
//     readStream.pipe(res);
// }).listen("3000");

// // IMAGE http - fs
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    const readStream = fs.createReadStream("./coloroda.jpeg");
    res.writeHead(200, { "Content-type": "image/jpeg" });
    readStream.pipe(res);
}).listen("3000");
