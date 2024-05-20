"use strict";
// an email template that can be used with Nodemailer to send emails
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlTempResetPassword = exports.htmlTempPassword = void 0;
// export const htmlTempResetPass = (message: string): string => {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Reset Password</title>
//     <style>
//       #container {
//         width: max-content;
//         background-color: rgb(239, 239, 239);
//         padding: 30px;
//       }
//       button {
//         display: block;
//         margin-top: 20px;
//         background-color: rgb(44, 44, 255);
//         padding: 10px 20px;
//         border-radius: 10px;
//         border: none;
//         color: white;
//       }
//       button:hover {
//         cursor: pointer;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="container">
//       <div>Hi,</div>
//       <p>Forgot your password?</p>
//       <p>
//         ${message}:
//         <a href="http://localhost:3000/Resetpass?token=${token}"><button>Reset password</button></a>
//       </p>
//     </div>
//   </body>
// </html>
// `;
// };
const htmlTempPassword = (message, name, pass, data) => {
    return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Password</title>
    <style>
    div{
      margin-top: 20px
    }
      #container {
        width: max-content;
        background-color: rgb(239, 239, 239);
        padding: 30px;
      }
      button {
        display: block;
        margin-top: 20px;
        background-color: rgb(44, 44, 255);
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        color: white;
      }
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div>
        Hello ${name},
      </div>
      <div>
        Thank you for signing up to Afitpilot
      </div>
      <div>
        Your test results:
      </div>
      <div>
        <div>
          <b>${Object.keys(data)[0]}</b>:
        </div>
        <div>
          <ul>
            <li>${Object.keys(data.somatotype)[0]}: ${data.somatotype.endomorphy}</li>
            <li>${Object.keys(data.somatotype)[1]}: ${data.somatotype.ectomorphy}</li>
            <li>${Object.keys(data.somatotype)[2]}: ${data.somatotype.mesomorphy}</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <b>${Object.keys(data)[1]}</b>:
        </div>
        <div>
          <ul>
            <li>${Object.keys(data.anthropometric)[0]}: ${data.anthropometric.height}</li>
            <li>${Object.keys(data.anthropometric)[1]}: ${data.anthropometric.weight}</li>
            <li>${Object.keys(data.anthropometric)[2]}: ${data.anthropometric.supraspinal_skinfold}</li>
            <li>${Object.keys(data.anthropometric)[3]}: ${data.anthropometric.subscapular_skinfold}</li>
            <li>${Object.keys(data.anthropometric)[4]}: ${data.anthropometric.tricep_skinfold}</li>
            <li>${Object.keys(data.anthropometric)[5]}: ${data.anthropometric.femur_breadth}</li>
            <li>${Object.keys(data.anthropometric)[6]}: ${data.anthropometric.humerus_breadth}</li>
            <li>${Object.keys(data.anthropometric)[7]}: ${data.anthropometric.calf_girth}</li>
            <li>${Object.keys(data.anthropometric)[8]}: ${data.anthropometric.bicep_girth}</li>
          </ul>
        </div>
      </div>
      <br/>
      <p>
      ${message}: ${pass}
      </p>
    </div>
  </body>
</html>
`;
};
exports.htmlTempPassword = htmlTempPassword;
const htmlTempResetPassword = (message, name, pass) => {
    return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Password</title>
    <style>
    div{
      margin-top: 20px
    }
      #container {
        width: max-content;
        background-color: rgb(239, 239, 239);
        padding: 30px;
      }
      button {
        display: block;
        margin-top: 20px;
        background-color: rgb(44, 44, 255);
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        color: white;
      }
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div>
        Hello ${name},
      </div>
      <br/>
      <p>Forgot the password?</p>
      <p>
      ${message}: ${pass}
      </p>
    </div>
  </body>
</html>
`;
};
exports.htmlTempResetPassword = htmlTempResetPassword;
