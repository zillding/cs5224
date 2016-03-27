const fs = require('fs')
const csv = require('fast-csv')

const INPUT_FILE_DIR = `${__dirname}/csv`
const OUTPUT_FILE_DIR = `${__dirname}/../lib/data`

const files = ['hd', 'pad', 'pd', 'ufd']
const dirs = ['enrolment', 'graduates']

dirs.forEach(dir => {
  files.forEach(name => {
    const input = `${INPUT_FILE_DIR}/${dir}/${name}.csv`
    const output = `${OUTPUT_FILE_DIR}/${dir}/${name}.json`
    convertToJson(input, output)
  })
})

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
function process(o) {
  const result = {}
  const keys = Object.keys(o)
  keys.forEach(key => {
    result[key] = Number(o[key])
  })
  return result
}
