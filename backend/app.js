const express = require('express');
const app  = express();
const {getDoctors} = require('./controllers/doctors')
const cors = require('cors');

app.use(cors());

app.use('/getDoctors', async (req, res) => {
  output = await getDoctors(req)
  return res.json(output)
})

app.use('/', (req, res) => res.send('Hello World!'))

app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))
