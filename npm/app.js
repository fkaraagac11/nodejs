const Emitter = require("events");
eventEmitter = new Emitter();

eventEmitter.on("message", function (name) {
    console.log(name);
});

eventEmitter.emit("message", "fehmi");
