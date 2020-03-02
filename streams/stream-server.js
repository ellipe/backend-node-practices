const fs = require('fs')

const server = require('http').createServer()

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big')
  src.pipe(res)
})

server.listen(3000)
console.log('server is listening in port 3000')
