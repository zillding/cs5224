'use strict'
const send = require('koa-send')

module.exports.data = function * data(next) {
  // retrieve data
  yield send(this, '/lib/data.json')
}
