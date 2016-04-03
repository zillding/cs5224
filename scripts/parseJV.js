const fs = require('fs')
const csv = require('fast-csv')

const INPUT_FILE = `${__dirname}/csv/jv.csv`
const OUTPUT_FILE = `${__dirname}/../lib/data/jv.json`

convertToJson(INPUT_FILE, OUTPUT_FILE)

// convert a csv file to a json file
function convertToJson(inputFilePath, outputFilePath) {
  const inputStream = fs.createReadStream(inputFilePath)
  const outputStream = fs.createWriteStream(outputFilePath)

  const result = []

  const csvStream = csv({
    headers: true
  })
  .on('data', function(data){
    result.push(process(data))
  })
  .on('end', function(){
    // write the result to output file
    outputStream.write(
      JSON.stringify(result, null, 2),
      err => {
        if (err) return console.log(err)
        console.log('Done!')
        console.log(`File saved to: ${outputFilePath}`)

        inputStream.close()
        outputStream.close()
      }
    )
  })

  // start processing
  console.log(`Input file: ${inputFilePath}`)
  inputStream.pipe(csvStream)
}

// convert all values of the object to number
// except quarter
function process(o) {
  const result = {}
  const keys = Object.keys(o)
  keys.forEach(key => {
    if (key === 'quarter') return result[key] = o[key]
    result[key] = Number(o[key])
  })
  return result
}
