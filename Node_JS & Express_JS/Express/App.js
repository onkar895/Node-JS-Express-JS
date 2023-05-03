const express = require('express')

const App = express()

// Here we are setting the view engine as 'ejs' that, means we are using 'ejs' view engine
App.set('view engine', 'ejs')

// App.set('Views', 'MyViews')   : It will set the Views folder as MyViews

App.listen(3000)

App.get('/', (req, res) => {
  // res.send('<h2>This is a Home Page</h2>')
  res.sendFile('./Views/index.html', {root: __dirname})
})

// If u want to log the current directory on the console: then we can use __dirname here

App.get('/about', (req, res) => {
  // res.send('<h2>This is a About Page</h2>')
  res.sendFile('./Views/about.html', {root: __dirname})
})

App.get('/hello', (req, res) => {
  //   res.send('<h2>This is a Hello Page</h2>')
  res.sendFile('./Views/Hello.html', {root: __dirname})
})

// App.get('/hello', (req, res) => {
//   res.send('<h2>This is a Hello Page</h2>')
//   res.redirect('hellos')
// })

// use() Method:
// The app. use() method mounts or puts the specified middleware functions at the specified path. 
// This middleware function will be executed only when the base of the requested path matches the defined path.
App.use((req, res) => {
  res.sendFile('./Views/404.html', {root: __dirname})
})
