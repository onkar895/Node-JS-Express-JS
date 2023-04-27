// Node modules:

// 1. Here below I have include the module.
// 2. To include a module in a Node.js application, use the require() function with the parenthesis containing the name of the module.
// 3. so here below moment is the module name.

const moment = require('moment')
const date = moment(new Date).format('MMM Do YYYY, h:mm:ss a') // Gives you today's date and current time
console.log(date)

// Node.js HTTP module:
// 1. Node.js has a built -in module called HTTP.This module enables Node.js to transfer data over the internet.
// 2. We use the require() method to include the HTTP module in an application.

// let's create a simple Web server using the HTTP module:

// var http = require('http')
// http.createServer(function (req, res) {
//   res.write('Hello, My name is http server')
//   res.end()
// }).listen(8080)
// listen: Start a server listening for connections.

// Explaination:
// 1. We use the require() method to include the HTTP module in the application
// 2. Then, we create a server object using the createServer method
// 3. After that, we write a response 'Hello World!' to the client and then end it
// 4. We set the web server to listen at port - 8080

// Import:
// Importing Modules from one file to another:

const {students, batch} = require('./students')

console.log(`Students list in modules module: ${students} and batches ${batch}`)
