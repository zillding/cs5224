const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.dev')

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

// api
app.get('/api/data', function(req, res) {
  res.sendFile(`${__dirname}/lib/data.json`)
})

// static files
app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/lib/public/index.html`)
})

app.listen(3000, function(err) {
  if (err) return console.log(err)
  console.log('Listening at http://localhost:3000')
})
