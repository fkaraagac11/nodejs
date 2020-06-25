//Events module
// const Emitter = require("events");
// eventEmitter = new Emitter();

// eventEmitter.on("message", function (name) {
//     console.log(name);
// });

// eventEmitter.emit("message", "fehmi");

// URL HTTP

const express = require("express");
//const { response } = require("express");
//const { readFile } = require("fs");

const app = express();

app.get("/", (request, response) => {
    readFile("./index.html", "utf8", (err, html) => {
        if (err) {
            response.status(500).send("sorry out of scope");
        }
        response.send(html);
    });

    app.listen(process.env.PORT || 8000, () =>
        console.log(`App available on http://localhost/:8000`)
    );
});
