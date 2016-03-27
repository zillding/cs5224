'use strict'
const fs = require('fs')

module.exports = function isFile(path) {
  try {
    if (fs.statSync(path).isFile()) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}
