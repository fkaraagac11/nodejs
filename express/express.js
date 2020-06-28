const texpress = require("express");
const app = texpress();

app.get("/", (req, res) => {
    res.send("An alligator approaches!");
});

app.listen(3000, function () {
    console.log("Gator app listening on port 3000!");
});
