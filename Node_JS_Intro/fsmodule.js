// Node js file system:

// 1. The Node.js file system module enables the file system to work on a computer.
// 2. We use the require() method to include the file system module in the web application.

const fs = require('fs')
// console.log(fs)

// 1. Reading a file:

// fs.readFile('./Docs/blog.txt', (error, data) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(data)
//   console.log(data.toString())
// })

// Explaination:
// 1. The first line, console.log(data), prints out the value of the "data" variable as is, without converting it to a string.
// Depending on the data type of "data", this could print out different information such as an object, an array, a string, a number, or null / undefined.

// 2. The second line, console.log(data.toString()), converts the "data" variable to a string using the toString() method and then prints out
// the resulting string. This is useful if "data" is not already a string but you want to print it out as one.
// The toString() method is available for many data types, including objects, arrays, numbers, and booleans.
// If "data" is null or undefined, this line of code will throw an error.

// 2. Writing a file:

// fs.writeFile('./Docs/blog.txt', 'This is my updated Blog content', () => {
//   console.log('Writing a file successfully')
// })

// 3. Creation and Deletion of Directory:

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (error) => {
    if (error) {
      console.log(error)
    }
    console.log('Folder Created')
  })
}else {
  fs.rmdir('./assets', (error) => {
    if (error) {
      console.log(error)
    }
    console.log('Folder Deleted')
  })
}

// 4. Delete a File:

if (fs.existsSync('./Docs/Deleteme.txt')) {
  fs.unlink('./Docs/Deleteme.txt', () => {
    if (error) {
      console.log(error)
    }
    console.log('File Deleted')
  })
}
