const express = require('express')
// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
// const { result } = require('lodash')

const Blogs = require('./Models/Blog')

const App = express()

// Connect to MongoDB:
const dbURI = 'mongodb+srv://onkarkarale0541:D-war541895@node-tutorial.bszq1wq.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(dbURI, {
//   useNewurlParse: true,
//   useUnifiedTopology: true
// })

mongoose.connect(dbURI)
  .then((result) => console.log('Connected to the database successfully'))
  .catch((err) => console.log(err))

// Here we are setting the view engine as 'ejs' that, means we are using 'ejs' view engine
App.set('view engine', 'ejs') //  Set EJS as templating engine

// App.set('Views', 'MyViews')   : It will set the Views folder as MyViews

App.use(express.static('Public'))
// The express.static() function takes one argument, which is the name of the directory where the static assets are located. In this case, the directory is "Public".

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

// Middleware:
// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
// This middleware function will be executed only when the base of the requested path matches the defined path.
// Middleware is a function that executes before the final request handler and can be used to modify the request or response objects, perform authentication, logging, error handling, and many other tasks.

// 1st Middleware:
App.use((req, res, next) => {
  // res.sendFile('./Views/404.html', {root: __dirname})
  console.log('New Request is made')
  console.log('Host:', req.hostname)
  console.log('Path:', req.path)
  console.log('Method:', req.method)

  next()
// This next() function indicates that we are finished with this particular part now you can move to the next part.
})

// Explaination :
// In this specific example, the middleware function is defined using app.use() method, which adds the middleware to the application's request handling pipeline.
// This function takes a callback function with three parameters: req, res, and next.
// The req parameter represents the HTTP request object that contains information about the incoming request, such as the request method, URL, headers, and parameters.
// The res parameter represents the HTTP response object that will be sent back to the client, and it allows modifying the response status, headers, and body.
// The next parameter is a function that, when called, passes control to the next middleware function in the pipeline.
// It is used to chain multiple middleware functions together, with each middleware function modifying the request or response objects in some way.
// In this specific middleware function, the console logs the information about the incoming request, such as the hostname, path, and HTTP method,
// and then calls the next function to pass control to the next middleware function or final request handler.

// 2nd Middleware:
App.use((req, res, next) => {
  console.log('This is the next middleware')
  next()
})

App.get('/add-blog', (req, res) => {
  const blog = new Blogs({
    title: 'new blog',
    preview: 'This is a new blog with mongodb',
    body: 'This is the blog body'
  })

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
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
