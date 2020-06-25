const mathOperator = require("events");

var SumSubTool = new mathOperator();

SumSubTool.on("signal", (num1, num2) => {
    let total = num1 + num2;
    // console.log(total);
    // return total;
});

SumSubTool.emit("signal", 5, 55);
