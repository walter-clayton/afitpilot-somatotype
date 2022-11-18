const nodemailer = require("nodemailer");
const { htmlTempResetPass, htmlTempPassword } = require("./mail-template");

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

// /**
//  *
//  * @param email String
//  * @param token String
//  */
// const sendEmailResetPass = async (
//   email: string,
//   pass: string
// ): Promise<void> => {
//   const message: string = "To reset your password, click on the button below:";

//   const options: IOptionsNodemailer = {
//     from: `noreply <${process.env.MAIL_USER}>`, // sender address
//     to: email, // receiver email
//     subject: "Reset your account", // Subject line
//     text: message,
//     html: htmlTempPassword(message, pass),
//   };

//   try {
//     const info = await transporter.sendMail(options);

//     return info;
//   } catch (error) {
//     console.log(error);
//   }
// };

/**
 *
 * @param email String
 * @param token String
 */
const sendEmailPassword = async (
  email: string,
  pass: string
): Promise<void> => {
  const message: string =
    "You can use this randomly generated password to access your profile:";

  const options: IOptionsNodemailer = {
    from: `noreply <${process.env.MAIL_USER}>`, // sender address
    to: email, // receiver email
    subject: "Your password to access your account", // Subject line
    text: message,
    html: htmlTempPassword(message, pass),
  };

  try {
    const info = await transporter.sendMail(options);

    return info;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmailPassword };
