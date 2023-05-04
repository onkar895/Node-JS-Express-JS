const express = require('express')

const App = express()

// Here we are setting the view engine as 'ejs' that, means we are using 'ejs' view engine
App.set('view engine', 'ejs') //  Set EJS as templating engine

// App.set('Views', 'MyViews')   : It will set the Views folder as MyViews

// Template engine:
// Template engine is a part of Express that enables us to use static files in our applications.
// Template engine converts variables to values and changes the template to HTML files to send to the client.

// EJS: 
// EJS or Embedded Javascript Templating is a templating engine used by Node.js. 
// Template engine helps to create an HTML template with minimal code.
// Also, it can inject data into an HTML template on the client side and produce the final HTML.
// EJS is a simple templating language that is used to generate HTML markup with plain JavaScript.
// It also helps to embed JavaScript into HTML pages. 

App.listen(3000)

App.get('/', (req, res) => {
  // res.send('<h2>This is a Home Page</h2>')
  // res.sendFile('./Views/index.html', {root: __dirname})
  res.render('index')
// The res.render() function is used to render a view and sends the rendered HTML string to the client. 
})

// If u want to log the current directory on the console: then we can use __dirname here

App.get('/about', (req, res) => {
  // res.send('<h2>This is a About Page</h2>')
  // res.sendFile('./Views/about.html', {root: __dirname})
  res.render('about')
})

App.get('/contact', (req, res) => {
  //   res.send('<h2>This is a Hello Page</h2>')
  // res.sendFile('./Views/Hello.html', {root: __dirname})
  res.render('Contact')
})

// App.get('/hello', (req, res) => {
//   res.send('<h2>This is a Hello Page</h2>')
//   res.redirect('hellos')
// })

// use() Method:
// The app. use() method mounts or puts the specified middleware functions at the specified path. 
// This middleware function will be executed only when the base of the requested path matches the defined path.
App.use((req, res) => {
  // res.sendFile('./Views/404.html', {root: __dirname})
  res.render('404')
})
