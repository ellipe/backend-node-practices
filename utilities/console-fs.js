const fs = require('fs')
const out = fs.createWriteStream('./out.log')
const err = fs.createWriteStream('./error.log')

const consoleFile = new console.Console(out, err)

setInterval(() => {
  consoleFile.log(new Date())
  consoleFile.error(new Error('Opps!'))
}, 2000)
