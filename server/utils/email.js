const nodemailer = require("nodemailer");

console.log({
  HOST: process.env.SMTP_HOST,
  PORT: process.env.SMTP_PORT,
  USER: process.env.SMTP_USER,
  PASS: !!process.env.SMTP_PASS,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    },
});

(async () => {
  try {
    await transporter.verify();
    console.log("SMTP VERIFIED");
  } catch (e) {
    console.error("VERIFY FAILED");
    console.error(e);
  }
})();