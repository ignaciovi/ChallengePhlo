const express = require('express');
const app  = express();
const {getDoctors} = require('./controllers/doctors')
const {sendEmail} = require('./mailer/Mailer')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/getDoctors', async (req, res) => {
  output = await getDoctors(req)
  if(output === []) {
    return res.status(404).json(output)
  } else {
    return res.status(200).json(output)
  }
})

app.post('/sendEmail', async (req, res) => {
  output = await sendEmail(req)
  return res.json(output)
})

app.use('/health', (req, res) => res.send('Server running OK'))

app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))

module.exports = app;
