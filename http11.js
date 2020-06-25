const http = require("http");
const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.write("Hello from Tysons Corner");
        res.end();
    } else {
        res.write("something else");
        res.end();
    }
});

server.listen("8000");
