const Emitter = require("events");
const eventEmitter = new Emitter();

eventEmitter.on("tutorial", (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 5, 9);

class Person extends Emitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let fehmi = new Person("fehmi");
let melih = new Person("melih");

fehmi.on("name", () => {
    console.log("my name is " + fehmi.name);
});

melih.on("name", () => {
    console.log("my name is " + melih.name);
});

fehmi.emit("name");
melih.emit("name");
