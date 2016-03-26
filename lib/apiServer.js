'use strict'
const express = require('express')

const controller = require('./controller')

const app = express()

// api
app.get('/api/enrolment/:type', controller.enrolment)

module.exports = app
