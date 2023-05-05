const express = require('express')

const App = express()

// Here we are setting the view engine as 'ejs' that, means we are using 'ejs' view engine
App.set('view engine', 'ejs') //  Set EJS as templating engine

// App.set('Views', 'MyViews')   : It will set the Views folder as MyViews

App.get('/', (req, res) => {
  // res.send('<h2>This is a Home Page</h2>')
  // res.sendFile('./Views/index.html', {root: __dirname})
  // If u want to log the current directory on the console: then we can use __dirname here
  res.render('index')
// route for index page
// The res.render() function is used to render a view and sends the rendered HTML string to the client. 
})

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

App.listen(8080, () => {
  console.log('Server is running on port 8080 ')
})
// Explanation :

// We are importing the Express module and declaring its instance as an app.
// We are setting up a server to listen at port 8080 by using app.listen().
// We are telling our server to use EJS template engine in line,
// app.set(“view engine”, “ejs”).
// We also set up routes / and /about etc to render index and magic EJS pages respectively.
// You can notice that our server shows user HTML content by using res.render(). 
// Note that this res.render method will look for EJS files in the views directory so we only have to give the file name overall path will be interpreted as / views / index.
