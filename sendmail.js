const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'a34827395@gmail.com', // Your email address
    pass: 'ssrp icrz pejz bkhm', // Your password
  }
});

// Email content
const mailOptions = {
  from: 'a34827395@gmail.com', // Sender address
  to: ['ajithchandran1323@gmail.com'], // recieving mail id's
  subject: 'nodemailer', // Subject line
  text: 'Hello......', // Plain text body
};

// Send email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});