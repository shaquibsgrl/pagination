const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "a6d11aa2ac5be4", // generated ethereal user
      pass: "c95bc69e9ca077", // generated ethereal password
    },
  });

  module.exports=transporter;