const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify()
  .then(() => console.log("SMTP VERIFIED"))
  .catch(err => console.error("VERIFY FAILED", err));

const sendEmail = async (options) => {
  return transporter.sendMail({
    from: `Alumni Portal <${process.env.EMAIL_FROM}>`,
    to: options.email,
    subject: options.subject,
    html: options.html,
  });
};

module.exports = sendEmail;