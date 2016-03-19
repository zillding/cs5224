'use strict'

module.exports.data = function data(req, res) {
  // retrieve data
  // TODO: get from database
  res.sendFile(`${__dirname}/data.json`)
}
