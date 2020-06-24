var nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yilmazkarakartal1973@gmail",
        pass: "Kartal0594",
    },
});

var mailOptions = {
    from: "yilmazkarakartal1973@gmail",
    to: "xapollon430@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
