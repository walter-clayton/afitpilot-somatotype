const nodemailer = require("nodemailer");
const HTML_TEMPLATE = require("./mail-template");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

interface IOptionsNodemailer {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

/**
 *
 * @param email String
 * @param username String
 */
const sendEmail = async (
  email: string,
  username: string,
  token: string
): Promise<void> => {
  const message: string = "To reset your password, click on the button below:";

  const options: IOptionsNodemailer = {
    from: `noreply <${process.env.MAIL_USER}>`, // sender address
    to: email, // receiver email
    subject: "Reset your account", // Subject line
    text: message,
    html: HTML_TEMPLATE(username, message, token),
  };

  try {
    const info = await transporter.sendMail(options);

    return info;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
