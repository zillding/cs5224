'use strict'
const fs = require('fs')

const INPUT_FILE_DIR = `${__dirname}/../lib/data`
const OUTPUT_FILE = `${__dirname}/../lib/data/data.json`

const dirs = ['enrolment', 'graduates']
const files = ['hd', 'ufd', 'pad', 'pd']

const result = {}

dirs.forEach(dir => {
  result[dir] = {}
  files.forEach(file => {
    const input = `${INPUT_FILE_DIR}/${dir}/${file}.json`
    result[dir][file] = JSON.parse(fs.readFileSync(input))
  })
})

fs.writeFile(OUTPUT_FILE, JSON.stringify(result, null, 2), err => {
  if (err) return console.log(err)

  console.log(`Saved to file: ${OUTPUT_FILE}`)
})
