// Node.js HTTP module:

// 1. Node.js has a built -in module called HTTP. This module enables Node.js to transfer data over the internet.
// 2. We use the require() method to include the HTTP module in an application.

// let's create a simple Web server using the HTTP module:

const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

  // Request:
  console.log(req.url, req.method) // It uses GET method
  console.log('Request is created.')

  // Method 1:
  // Displaing by giving response to the server:

  // Response and setHeaders:

  // res.setHeader('Content-Type', 'Text/Plain')      :    here content type is plain text
  // res.write('Welcome to http server, port no: 8080')
  // res.end()

  // res.setHeader('Content-Type', 'Text/html')          // here content type is html format
  // res.write('<h2>Welcome to http server, port no: 8080</h2>')
  // res.end()

  res.setHeader('Content-Type', 'Text/html')

  let path = './Views/'
  console.log(`This is a default path: ${path}`)
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      console.log(`This page is now on screen: ${path}`)
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      console.log(`This page is now on screen: ${path}`)
      break
    case '/404':
      path += '404.html'
      res.statusCode = 400
      console.log(`This page is now on screen: ${path}`)
      break
    default:
      path += 'Hello.html'
      console.log(`This page is now on screen: ${path}`)
      break
  }

  //  fs.readFile('./Views/index.html', (err, data)
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
    }else {
      res.write(data)
      res.end()
    }
  })
}).listen(8080, () => {
  console.log('Listening for request done on port 8080')
})
// listen: Start a server listening for connections.

// Explaination Method 1:
// Whenever a new request is made to the server, the callback function passed to http.createServer() is called with two arguments: req and res,
// which represent the incoming request and the server's response, respectively.
// 1. We use the require() method to include the HTTP module in the application
// 2. Then, we create a server object using the createServer method.
//     The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
// 3. In the code snippet, console.log(req.url, req.method) logs the URL and HTTP method used in the incoming request to the server console.
// 4. res.setHeader('Content-Type', 'Text/Plain') sets the Content-Type header of the response to 'Text/Plain', indicating that
//     the response body will be plain text and if content type is html then it displays in html format.
// 5. After that, we write a response 'Hello World!' to the client and then end it
// 6. We set the web server to listen at port - 8080
