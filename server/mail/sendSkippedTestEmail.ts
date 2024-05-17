// Import necessary modules and types
import { htmlTempSkippedTestEmail } from "./htmlTempSkippedTestEmail";
import { logoBase64 } from "./logo";
const nodemailer = require("nodemailer");

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

// Define the interface for email options
interface IOptionsNodemailer {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  attachments?: any;
}

// Function to send email for users who skipped the test
const sendSkippedTestEmail = async (
  email: string,
  name: string,
  pass: string
): Promise<void> => {
  const message: string =
    "You can use this randomly generated password to access your profile";

  const options: IOptionsNodemailer = {
    from: `Afitpilot <${process.env.MAIL_USER}>`, // Sender address
    to: email, // Receiver email
    subject: "Your generated password to access your account", // Subject line
    text: message,
    html: htmlTempSkippedTestEmail(message, name, pass), // HTML content of the email
    attachments: [
      {
        filename: "logo.png",
        path: logoBase64,
        cid: "logo.png",
      },
    ],
  };

  try {
    // Send email using nodemailer transporter
    const info = await transporter.sendMail(options);
    console.log("Email sent:", info);

    return info;
  } catch (error) {
    console.log("Error sending email:", error);
    throw error;
  }
};

// Export the sendSkippedTestEmail function for use in other modules
export default sendSkippedTestEmail;
