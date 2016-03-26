'use strict'
const express = require('express')

const controller = require('./controller')

const app = express()

// api
app.get('/api/data', controller.data)

module.exports = app
