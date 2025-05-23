
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let codeStore = {}; // Simple in-memory storage

app.post('/send-code', (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codeStore[email] = code;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohana.gunuru@gmail.com',
      pass: 'myqp hogl rfhj toyd',
    },
  });

  const mailOptions = {
    from: 'mohana.gunuru@gmail.com',
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).send('Failed to send email');
    res.status(200).send('Code sent');
  });
});

app.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  if (codeStore[email] === code) {
    delete codeStore[email]; // One-time use
    res.send({ verified: true });
  } else {
    res.send({ verified: false });
  }
});

app.listen(5500, () => console.log('Server running on port 5500'));
