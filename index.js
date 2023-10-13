const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
});

transport.sendMail({
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  subject: process.env.SUBJECT,
  html: process.env.EMAIL_HTML,
  text: process.env.EMAIL_TEXT
}).then(() => {
  console.log(process.env.EMAIL_SUCCESS_MSG);
}).catch((error) => {
  console.log(process.env.EMAIL_FAILURE_MSG, error);
  console.log('An error occurred while sending your email: ', error);
});
