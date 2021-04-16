
let companies = ['Tesla', 'BMW', 'Apple', 'Samsung']

for (let i = 0; i < companies.length; i++) {
    console.log(i + 1 + ')', companies[i])
}
console.log('\nMore laconic way to do loop through objects in an array\n')

for (let company of companies) {
    console.log(company)
}
