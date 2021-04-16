// Declare

let companies = ['Tesla', 'BMW', 'Apple', 'Samsung']
console.log(companies)

const students = new Array('Tom', 'Mark', 'Claire')
console.log(students)

// Access
console.log('First student is '+ students[0])
console.log('Second student is '+ students[1])
console.log('Third student is '+ students[2])
console.log('Does fouth student exist?  '+ students[3])
console.log('Overall there are ' + students.length + ' students')

// Overwrite 
console.log('Last company is ' + companies[companies.length-1])
companies[companies.length-1] = 'Xiaomi'
console.log('From now last company is ' + companies[companies.length-1])

// Add (right add)
companies[companies.length] = 'Philips'
companies[companies.length + 30] = 'Air Astana'
console.log(companies)