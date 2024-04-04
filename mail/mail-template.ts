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
  // const byteCharacters = atob(logoBase64);
  // const byteNumbers = new Array(byteCharacters.length);
  // for (let i = 0; i < byteCharacters.length; i++) {
  //   byteNumbers[i] = byteCharacters.charCodeAt(i);
  // }
  // const byteArray = new Uint8Array(byteNumbers);
  // const blob = new Blob([byteArray], { type: "image/png" });
  // const urlImg = URL.createObjectURL(blob as any);

  return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <noscript>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          </noscript>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
  </head>
  
  <body style="word-spacing:normal;">
    <div style="">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                              <tr>
                                <td style="width:100px;">
                                  <img height="auto" src="cid:logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;font-size:13px;width:200px" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                              <tr>
                                <td style="width:200px;">
                                  <img height="auto" src="cid:avatar.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="200" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <p style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:100%;">
                          </p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                      <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                        <div style="font-family:helvetica;font-size:20px;line-height:25px;text-align:left;color:#000000;">Hello ${name},</div>
                      </td>
                    </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;line-height:25px;text-align:left;color:#000000;">The results of your somatotype are:</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;"><span style="font-weight:bold;">Somatotype:</span> <a href="https://www.afitpilot.com/Types">${
                            data.somatotype.titleSomatotype
                          } (${data.somatotype.codeSomatotype})</a></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;font-weight:bold;line-height:25px;text-align:left;color:#000000;">Results:</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Endomorphy: <span style="font-weight:bold;">${data.somatotype.endomorphy.toFixed()}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Mesomorphy: <span style="font-weight:bold;">${data.somatotype.mesomorphy.toFixed()}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Ectomorphy: <span style="font-weight:bold;">${data.somatotype.ectomorphy.toFixed()}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Height (cm): <span style="font-weight:bold;">${data.anthropometric.height}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Bicep (cm): <span style="font-weight:bold;">${data.anthropometric.bicep_girth}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Calf (cm): <span style="font-weight:bold;">${data.anthropometric.calf_girth}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Femur (cm): <span style="font-weight:bold;">${data.anthropometric.femur_breadth}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Humerus (cm): <span style="font-weight:bold;">${data.anthropometric.humerus_breadth}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Weight (kg): <span style="font-weight:bold;">${data.anthropometric.weight}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">• Body Fat (%): <span style="font-weight:bold;">${data.anthropometric.body_fat}<span></div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <p style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:100%;">
                          </p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:#000000;">You can use this randomly generated password to access your profile:</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:20px;font-weight:bold;line-height:25px;text-align:left;color:unset;">${pass}</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <p style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:100%;">
                          </p>
                          <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 3px #6C4D7B;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
  </td></tr></table><![endif]-->
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:25px;font-weight:bold;line-height:25px;text-align:center;color:#000000;">Optimise your Somatotype</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <div style="font-family:helvetica;font-size:18px;line-height:25px;text-align:left;color:unset;">Your journey to greatness is just beginning. Gain a more profound understanding of your body and unleash your potential by following our <a href="https://www.afitpilot.com/Optimisation">Optimisation Program</a>.</div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:260px;line-height:25px00%;">
                            <tr>
                              <td align="center" bgcolor="#6C4D7B" role="presentation" style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#6C4D7B;" valign="middle">
                                <a href="https://www.afitpilot.com/test" style="display:inline-block;width:250px;background:#6C4D7B;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:25px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;" target="_blank"> Get Started </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
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
