const nodemailer = require('nodemailer');

const sendEmail = async (req) => {

  const email = req.query.email
  const name = req.query.name
  const appointmentTime = req.query.appointmentTime

  let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'user',
      pass: 'pass'
    }
  });

  const message = {
    from: 'appointments@phlo.com', // Sender address
    to: email,         // List of recipients
    subject: 'Your appointment', // Subject line
    text: `Dear ${name}. Just a confirmation that you have booked your doctors appointment for ${appointmentTime}. Thanks` // Plain text body
  };
  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

  return "True"
}

module.exports = {
  sendEmail
}