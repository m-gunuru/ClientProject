
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let codeStore = {}; 

// generate n send code
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

  // email note
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
  const encodedEmail = encodeURIComponent(email);
  if (codeStore[email] === code) {
    delete codeStore[email]; 
    res.send({ redirect: `http://localhost:5500/ClientProject/front_end/CreatePassword.html?email=${encodedEmail}` });


  } else {
    res.send({error: 'Code entered is incorrect. Please try again.' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
