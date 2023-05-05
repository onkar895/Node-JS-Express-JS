// Export:
// Exporting Modules from one file to another:

// Here we are going to export students and batch into the modules file
const students = ['Onkar', 'Rishi', 'Pratik']
const batch = ['20', '30', '40']

console.log(`Students list in students module: ${students} and batches ${batch}`)

module.exports = { students, batch}
// Use the exports keyword to make properties and methods available outside the module file.
