// var message = 'Welcome to node js session'
// console.log(message)

// const mul = 10 * 10
// const add = 5 + 5

// console.log(`Multiplication of 10*10 = ${mul}`) // I have used backticks here.
// console.log(`Addition of 5+5 = ${add}`)

// Global :
console.log(global)

// Not mandatory to use global.
global.setTimeout(() => {
  console.log('Timeout enabled for 8sec')
  clearInterval(int) // clearInterval stops the infinite logs of setInterval
}, 8000)

const int = global.setInterval(() => {
  console.log('Interval enabled for 3sec')
}, 3000)

// If u want to log the current directory on the console:
console.log(__dirname)
// If u want to log the current filename on the console:
console.log(__filename)
