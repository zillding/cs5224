const fs = require('fs')
const csv = require('fast-csv')

const INPUT_FILE = process.argv[2] || `${__dirname}/data.csv`
const OUTPUT_FILE = `${__dirname}/../lib/data.json`

const inputStream = fs.createReadStream(INPUT_FILE)
const outputStream = fs.createWriteStream(OUTPUT_FILE)

const names = ['TTSH', 'CGH', 'SGH', 'NUH(A)', 'NTFGH', 'KTPH']
const result = []

const csvStream = csv({
  headers: true
})
.on('data', function(data){
  const waitingTime = {}
  names.map(name => {
    waitingTime[name] = Number(data[name])
  })

  result.push({
    date: data.Date,
    waitingTime
  })
})
.on('end', function(){
  // write the result to output file
  outputStream.write(
    JSON.stringify(result, null, 2),
    err => {
      if (err) return console.log(err)
      console.log('Done!')
      console.log(`File saved to: ${OUTPUT_FILE}`)
    }
  )
})

// start processing
inputStream.pipe(csvStream)
