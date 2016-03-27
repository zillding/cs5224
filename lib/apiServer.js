'use strict'
const express = require('express')

const controller = require('./controller')

const app = express()

// api
app.get('/api/data', controller.all)
app.get('/api/:type/:name', controller.single)

module.exports = app
