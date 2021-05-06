function calc(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b,
        undefined
    ]
}

// const result = calc(37, 3)
// const sum = result[0]
// const sub = result[1]


const [sum1, sub1] = calc(37, 3)
console.log(sum1, sub1)

// Default value will be assigned if returned value is `undefined` or `void`
const [sum2,, mult2,, def = 'Default value'] = calc(25, 5)
console.log(sum2, mult2, def)


const guy = {
    name: 'Alex',
    age: 39,
    addr: {
        country: 'Polska',
        city: 'Krakow'
    }
}
const {
    name: firstName = 'No first name',
    job = 'unemployed',
    addr: {city, country: homeCountry, zipcode = 'none'}
} = guy
console.log(firstName, job)
console.log(city, homeCountry, zipcode)

function logGuyInfo({name, age, addr: {city, country}, job = 'unemployed'}) {
    console.log(`${name} is ${age} years old and lives in ${country, city}. Current job: ${job}`)
}

logGuyInfo(guy)