const { Transform } = require('stream')

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(toCamelCase(chunk.toString()))
    callback()
  }
})

function toCamelCase(str) {
  return str
    .split(' ')
    .map(function(word, index) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

const transformStreamCamelCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(
      chunk
        .toString()
        .toUpperCase()
        .split(' ')
        .map(word => {
          return word.charAt(0) + word.slice(1).toLowerCase()
        })
        .join(' ')
    )
    callback()
  }
})

process.stdin.pipe(transformStreamCamelCase).pipe(process.stdout)
