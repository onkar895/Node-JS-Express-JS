// Node modules:

// 1. Here below I have include the module.
// 2. To include a module in a Node.js application, use the require() function with the parenthesis containing the name of the module.
// 3. so here below moment is the module name.

const moment = require('moment')
const date = moment(new Date).format('MMM Do YYYY, h:mm:ss a') // Gives you today's date and current time
console.log(date)

// Import:
// Importing Modules from one file to another:

const {students, batch} = require('./students')

console.log(`Students list in modules module: ${students} and batches ${batch}`)
