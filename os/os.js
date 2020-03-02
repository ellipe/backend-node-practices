const os = require('os')

console.log('CPU Info', os.cpus())
console.log(
  'Network Inferfaces',
  os.networkInterfaces().en1.map(i => i.address)
)

console.log('User Info', os.userInfo())
