'use strict'
const fs = require('fs')

const isFile = require('./utils/isFile')

module.exports.all = function all(req, res) {
  res.sendFile(`${__dirname}/data/data.json`)
}

module.exports.single = function single(req, res) {
  const type = req.params.type
  const name = req.params.name
  const filePath = `${__dirname}/data/${type}/${name}.json`
  if (isFile(filePath)) {
    res.sendFile(filePath)
  } else {
    res.status(404).end()
  }
}

module.exports.jv = function jv(req, res) {
  res.sendFile(`${__dirname}/data/jv.json`)
}
