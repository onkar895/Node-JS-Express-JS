// http server that responds hello world to all incoming request

const http = require('http')

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}).listen(3000, 'localhost', () => {
  console.log('Listening for request done on port 3000')
})
