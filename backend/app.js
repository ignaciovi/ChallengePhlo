const express = require('express');
const app  = express();
const {getDoctors} = require('./controllers/doctors')
const {sendEmail} = require('./mailer/Mailer')
const cors = require('cors');

app.use(cors());

app.use('/getDoctors', async (req, res) => {
  output = await getDoctors(req)
  return res.json(output)
})

app.use('/sendEmail', async (req, res) => {
  output = await sendEmail(req)
  return res.json(output)
})


app.use('/health', (req, res) => res.send('Server running OK'))

app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))

module.exports = app;
