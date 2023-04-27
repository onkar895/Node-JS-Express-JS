// Node.js HTTP module:
// 1. Node.js has a built -in module called HTTP.This module enables Node.js to transfer data over the internet.
// 2. We use the require() method to include the HTTP module in an application.

// let's create a simple Web server using the HTTP module:

var http = require('http')
http.createServer(function (req, res) {
  res.write('Hello, My name is http server')
  res.end()
}).listen(8080)
// listen: Start a server listening for connections.

// Explaination:
// 1. We use the require() method to include the HTTP module in the application
// 2. Then, we create a server object using the createServer method
// 3. After that, we write a response 'Hello World!' to the client and then end it
// 4. We set the web server to listen at port - 8080
