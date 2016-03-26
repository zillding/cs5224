'use strict'
const fs = require('fs')

module.exports.enrolment = function enrolment(req, res) {
  const type = req.params.type
  const filePath = `${__dirname}/data/enrolment/${type}.json`
  try {
    if (fs.statSync(filePath).isFile()) {
      res.sendFile(filePath)
    } else {
      res.status(404).end()
    }
  } catch (e) {
    res.status(404).end()
  }
}
