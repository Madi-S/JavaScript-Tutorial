const cities1 = ['Moscow', 'Astana', 'Omsk']
const cities2 = ['Las-Vegas', 'Las-Ventures', 'Los-Santos']
const cities1WithPopulation = {'Moscow': 17000000, 'Astana': 1100000, 'Omsk': 700000}
const cities2WithPopulation = {'Moscow': 16000000, 'Las-Vegas': 15000000, 'Las-Ventures': 27000000, 'Los-Santos': 12000000}

// Spread is `...`, it unpacks an array just like `*` in python
console.log(...cities1)

const allCities = [...cities1, 'New-York', ...cities2]
// const allCities = cities1.concat(cities2)
console.log(allCities)

// ... can also work with objects (merging). It will also rewrite existing keys depending on order (last = significant)
console.log({...cities1WithPopulation, 'Barcelona': 7000000, ...cities2WithPopulation})


// Usage
const nums = [2, 43, 12, 98, 7, 0]
console.log(Math.max(nums))     // NaN (in the past coders used `apply`)
console.log(Math.max(...nums))  // 98

const divs = document.querySelectorAll('div')   // Not an array but collection of HTML elements
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))