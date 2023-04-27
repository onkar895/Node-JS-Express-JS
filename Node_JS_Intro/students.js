// Export:
// Exporting Modules from one file to another:

// Here we are going to export students and batch into the modules file
const students = ['Onkar', 'Rishi', 'Pratik']
const batch = ['20', '30', '40']

console.log(`Students list in students module: ${students} and batches ${batch}`)

module.exports = { students, batch}
