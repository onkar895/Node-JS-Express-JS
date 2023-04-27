const fs = require('fs')

const readStream = fs.createReadStream('./Docs/blogTwo.txt', { encoding: 'utf-8' })
// readStream.on('data', (chunkOfData) => {
//   console.log(' \n New chunk of data received \n')
//   console.log(chunkOfData)
// //   console.log(chunkOfData.toString())
// })

// writeStream.write(' \n New chunk of data written \n')
// writeStream.write(chunkOfData)

const writeStream = fs.createWriteStream('./Docs/blogThree.txt')
readStream.pipe(writeStream)
