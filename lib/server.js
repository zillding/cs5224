'use strict'
const express = require('express')

const controller = require('./controller')

const app = express()

// api
app.get('/api/data', controller.data)

// static files
app.use(express.static(`${__dirname}/public`))
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`)
})

const port = process.env.VCAP_APP_PORT || 3000
app.listen(port, function(err) {
  if (err) return console.log(err)
  console.log(`Listening at port:${port}`)
})
