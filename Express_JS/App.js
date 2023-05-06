const express = require('express')

const App = express()

// Here we are setting the view engine as 'ejs' that, means we are using 'ejs' view engine
App.set('view engine', 'ejs') //  Set EJS as templating engine

// App.set('Views', 'MyViews')   : It will set the Views folder as MyViews

App.use(express.static('Public'))

App.get('/', (req, res) => {
  // res.send('<h2>This is a Home Page</h2>')
  // res.sendFile('./Views/index.html', {root: __dirname})
  // If u want to log the current directory on the console: then we can use __dirname here

  // Adding Blogs
  const blogs = [
    { blogtitle: ' Arena ', previewtext: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ', blogcontent: ' This is a Blog Content of the page ', author: ' Onkar ' },
    { blogtitle: ' Top Players ', previewtext: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', blogcontent: ' This is a Blog Content of the page ', author: ' Rishi ' },
    { blogtitle: ' Trending Games ', previewtext: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', blogcontent: ' This is a Blog Content of the page ', author: ' Manish ' },
    { blogtitle: ' Basic Tutorial ',  previewtext: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.', blogcontent: ' This is a Blog Content of the page ', author: ' Harshal '}
  ]

  res.render('index', { title: 'Home', blogs})
// here we are passing a title as Home while rendering the index.ejs page
// route for index page
// The res.render() function is used to render a view and sends the rendered HTML string to the client. 
})

App.get('/about', (req, res) => {
  // res.send('<h2>This is a About Page</h2>')
  // res.sendFile('./Views/about.html', {root: __dirname})
  res.render('about', {title: 'About'})
})

App.get('/contact', (req, res) => {
  //   res.send('<h2>This is a Hello Page</h2>')
  // res.sendFile('./Views/Hello.html', {root: __dirname})
  res.render('Contact', {title: 'Contact'})
})

// Custom Middleware: 
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
// This middleware function will be executed only when the base of the requested path matches the defined path.
App.use((req, res, next) => {
  // res.sendFile('./Views/404.html', {root: __dirname})
  console.log('New Request is made')
  console.log('Host:', req.hostname)
  console.log('Path:', req.path)
  console.log('Method:', req.method)

  next()
// This nest() function indicates that we are finished with this particular part now you can move to the next part.
})

App.use((req, res, next) => {
  console.log('This is the next middleware')
  next()
})

App.get('/teams', (req, res) => {
  res.render('Teams', {title: 'Teams'})
})

App.get('/blogs/create', (req, res) => {
  res.render('createBlog', {title: 'CreateBlog'})
})

App.get('/login', (req, res) => {
  res.render('Login')
})

App.get('/signup', (req, res) => {
  res.render('SignUp')
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
  res.status(404).render('404', { title: 'Error' })
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
