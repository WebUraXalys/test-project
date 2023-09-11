const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_MAIL, 
    pass: process.env.SMTP_PASSWORD, 
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, name, message } = req.body;
  console.log(email, name, message);

  const emailBody = `
  <html>
    <head>
      <style>
        body {
          background-color: #fffff;
          font-family: Roboto, sans-serif;
          color: #000;
        }
        .container {
          text-align: center;
          margin-top: 50px;
        }
        h1 {
          font-size: 24px;
        }
        p {
          font-size: 18px;
          margin-top: 20px;
        }
        span{
          color: #8643DC;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Доброго дня <span>${name}</span> , вас вітає Creator IT Academy</h1>
        <p>Найближчим часом ми розглянемо вашу ідею і зателефонуємо вам.</p>
        <p>Ваша ідея: ${message}</p>

      </div>
    </body>
  </html>
`;

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: `Лист від Creator IT Academy для ${name}`,
    html: emailBody,
  };

  transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
    res.status(500).send("Помилка при надсиланні електронної пошти");
  } else {
    console.log("Email sent successfully!");
    res.status(200).send("Email sent successfully!");
  }
});
});

module.exports = { sendEmail };
