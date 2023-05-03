const fs = require('fs')
// (file system) module which allows you to read and write files.

const readStream = fs.createReadStream('./Docs/blogTwo.txt', { encoding: 'utf-8' })
// The { encoding: 'utf-8' } option specifies that the file should be read as a UTF-8 encoded text file.

// readStream.on('data', (chunkOfData) => {
//   console.log(' \n New chunk of data received \n')
//   console.log(chunkOfData)
//   console.log(chunkOfData.toString())   
//   To avoid using Tostring everytime we have used 'encoding: utf - 8' above.
// })

// writeStream.write(' \n New chunk of data written \n')
// writeStream.write(chunkOfData)

const writeStream = fs.createWriteStream('./Docs/blogThree.txt')
readStream.pipe(writeStream)
// readStream.pipe(writeStream) "pipes" the data from the read stream to the write stream, effectively copying the contents of "blogTwo.txt" to "blogThree.txt". 
// This is a more efficient way to copy the file contents than reading the entire file into memory and then writing it to the new file.
// By using pipe method we can directly replace the data from one file to another.
