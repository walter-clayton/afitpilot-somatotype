// an email template that can be used with Nodemailer to send emails

import { IData } from "../interfaces/interfaces";

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

export const htmlTempPassword = (
  message: string,
  name: string,
  pass: string,
  data: IData
): string => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reset Password</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, Helvetica, sans-serif;
        }
        a{
          text-decoration: none;
          color: inherit;
        }
        #container {
          padding: 30px;
          max-width: 600px;
        }
        header {
          margin: 0 auto;
          width: min-content;
          margin-bottom: 30px;
        }
        #logo-wrap {
          max-width: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
        }
        #logo {
          width: 100%;
        }
        #avatar {
          max-width: 200px;
          margin: 0 auto;
          margin-bottom: 30px;
        }
        #avatar img {
          width: 100%;
        }
        button {
          display: block;
          width: 100%;
          font-size: 1.2rem;
          margin-top: 20px;
          background-color: #6C4D7B;
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
        <header>
          <div id="logo-wrap">
            <img id="logo" src="cid:logo.png" alt="logo" />
          </div>
          <h1 style="padding: 10px 0;">AFITPILOT</h1>
        </header>
        <div id="avatar">
          <img src="cid:avatar.png" alt="avatar" />
        </div>
        <div>
        <p style="margin-bottom: 20px;">The results of your somatotype test are in. Here they are:</p>
        <p style="margin-bottom: 5px;">
          <span style="font-weight: bold">Somatotype: </span>
          <span>${data.somatotype.titleSomatotype} (${
    data.somatotype.codeSomatotype
  })</span>
        </p>
        <p>
          <span style="font-weight: bold; display: block; margin-bottom: 2px;">Results:</span>
          <ul style="margin-left: 30px; margin-bottom: 20px;">
            <li>Endomorphy: <span style="font-weight: bold">${data.somatotype.endomorphy.toFixed()}</span></li>
            <li>Mesomorphy: <span style="font-weight: bold">${data.somatotype.mesomorphy.toFixed()}</span></li>
            <li>Ectomorphy: <span style="font-weight: bold">${data.somatotype.ectomorphy.toFixed()}</span></li>
          </ul>
        </p>
        <hr/>
        <p style="margin: 20px 0;">
          ${message}: <span style="font-weight: bold">${pass}</span>
        </p>
        <hr/>
        <h2 style="text-align: center; margin: 20px 0;">Optimise your Somatotype</h2>
        <p>
          Your journey to greatness is just beginning. Gain a more profound understanding of your body and unleash your potential by following our Optimisation Program. 
        </p>
        <a href="https://www.afitpilot.com/Optimisation">
          <button>Get Started</button>
        </a>
      </div>
      </div>
    </body>
  </html>`;
};

export const htmlTempResetPassword = (
  message: string,
  name: string,
  pass: string
): string => {
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
