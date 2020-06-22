const sum = function (num1, num2) {
    return num1 + num2;
};

const mult = (num3, num4) => num3 * num4;

class TestClass {
    constructor() {
        console.log("Object created");
    }
}
// module.exports.sum = sum;
// module.exports.mult = mult;
// module.exports.TestClass = TestClass;

module.exports = { sum: sum, mult: mult, TestClass: TestClass };
