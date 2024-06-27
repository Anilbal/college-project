const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(mailOptions) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host:process.env.HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
    await transporter.sendMail({
    from: mailOptions.from, // sender address
    to: mailOptions.to, // list of receivers
    subject: mailOptions.subject, // Subject line
    text: mailOptions.text, // plain text body
    html: mailOptions.html, // html body
  });

  console.log("Message sent successfully");
 
}

module.exports=sendEmail