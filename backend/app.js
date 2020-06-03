const express = require('express');
const app  = express();
const {getDoctors} = require('./controllers/doctors')

app.use('/getDoctors', async (req, res) => {
  output = await getDoctors(req)
  return res.json(output)
})

app.use('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))
