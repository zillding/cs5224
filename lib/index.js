'use strict'
const serve = require('koa-static')
const logger = require('koa-logger')
const route = require('koa-route')
const koa = require('koa')
const path = require('path')

const app = koa()

const controller = require('./controller')

app.use(logger())

// apis
app.use(route.get('/api/data', controller.data))

// static files
app.use(serve(path.join(__dirname, '../public')));

const port = process.env.VCAP_APP_PORT || 3000
app.listen(port)
