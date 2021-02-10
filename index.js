const express = require('express')
const db = require('./database/connect')
const app = express()
const port = 3000
const usersApi =require('./routes/usersApi')
const postsApi =require('./routes/postsApi')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('NODE JS')
})
app.use('/api', usersApi);
app.use('api',postsApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})