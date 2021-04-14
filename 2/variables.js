// This is comment: # <!-- -->

// Decalaring variables
var age = 25
var name = 'Jack'

console.log(name + ' is ' + age + ' year old')
// age.toString()

// Create immutable object
const gender = 'male'

// Let is similar to var
let country = 'Kazakhstan'

console.log(country, name)

name = 'Emma'
console.log(name)

// gender = 'female' Cannot be achived (read-only)
console.log(gender)

country = 'Germany'
console.log(name + 'is from ' + country + ' and she is loves her fatherland')


const isValid = true;
const hasInternet = false;

console.log(isValid, hasInternet)


// Conclusion: 
// 1) Use let or const (var is outdated)
// 2) ; is optional
// 3) Declare variables by camelCase: firstName