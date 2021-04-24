
function sum(a, b) {
    return a + b
}

const a = Number(prompt('Enter first nubmer: '))
const b = Number(prompt('Enter second number: '))
res = sum(a, b)
alert(res)


function getAge(year){
    return 2020 - year
}

function showBiography(name, year){
    age = getAge(year)
    if (age > 0){
        console.log(name + ' is ' + year + ' years old and' + ' was born on ' + year)
    } else {
        console.log('Invalid year parameter')
    }
}


showBiography('Shaiken Madi', 2004)
showBiography('XAQOR-23K', 2050)
// Key arguments
// showBiography(name: 'Shaiken Madi', year: 2004)