// an email template that can be used with Nodemailer to send emails

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

export const htmlTempPassword = (message: string, pass: string): string => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Password</title>
    <style>
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
      <p>
        ${message}:
      </p>
      <br/>
      <p>
        ${pass}
      </p>
    </div>
  </body>
</html>
`;
};

