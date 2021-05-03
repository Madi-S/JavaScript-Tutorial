cities = [
    'Tokyo', 'Nur-Sultan', 'Omsk', 'New-York', 'Melbourne'
]

// forEach
cities.forEach((city, index, arr) => {
    console.log(`City: ${city}`)
    console.log(`Index: ${index}`)
    console.log(`Array: ${arr}`)
})

// Map
stringNums = ['1', '1', '3', '-5', '2.5', '6.0001']
const nums = stringNums.map(num => +num )
console.log(nums)

// Filter
const bigNums = nums.filter(num => num > 2.4)
console.log(bigNums)

// Reduce
const mult = bigNums.reduce((acc, num) => acc * num)
console.log(mult)   // 45.00075

// Find
capital = cities.find(city => city.toLowerCase() == 'nur-sultan')
console.log(capital)

// FindIndex
const omskIndex = cities.findIndex(city => city.toLowerCase() == 'omsk')
console.log(omskIndex)