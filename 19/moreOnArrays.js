const companies = ['Tesla', 'BMW', 'Xiaomi', 'Tefal'];
const fib = [0, 1, 1, 2, 3, 5, 8, '13', true];
const cars = [
    {'name': 'Toyota Camry 40', 'priceUSD': 2000, 'color': 'pink'},
    {'name': 'Toyota Camry 50', 'priceUSD': 5000, 'color': 'grey'},
    {'name': 'Mazda X6', 'priceUSD': 7000, 'color': 'black'}
];

console.log(companies);
// __proto__ Array(0)


// Function 
function pushValuesToLeft() {
    return true;
}
// Method
companies.push('H&M');


// Add item/items to the left/right
companies.push('LG', 'Samsung');
companies.unshift('Kaspi');
console.log(companies);


// Delete and return first/last item
firstCompany = companies.shift();
lastComany = companies.pop();
console.log(`Deleted ${firstCompany} and ${lastComany} from ${companies}`);

// Reverse and return array
console.log(companies.reverse());
console.log(companies);

// Get element's index by value
const tefalIndex = companies.indexOf('Tefal');
if (tefalIndex !== -1){
    console.log(`Tefal is located at ${tefalIndex+1} position`);
}

// Get element's index or element itself by own criteria (function)
const index = cars.findIndex(function(car){
    // console.log(car);
    return car.priceUSD > 5000;
});

let car = cars.find(function(car){
    // console.log(car);
    return car.priceUSD > 5000;
});

// A better way to do it (lambda function)
car = cars.find(car => {car.priceUSD > 5000});
console.log(car, index);

// This works just like for loop
for (const car of cars) {
    if (car.priceUSD > 5000) {
        foundCar = car;
        break;
    }
}
console.log(foundCar);


// Check if element is present in array
exists = companies.includes('Google');
console.log(exists);


// Map funciton (does operation over each element)
const upperCaseCompanies = companies.map(company => {return company.toUpperCase();});
console.log(upperCaseCompanies); // [ 'LG', 'H&M', 'TEFAL', 'XIAOMI', 'BMW', 'TESLA' ]

const anchors = companies.map(company => {return company.anchor('https://localhost:8080/'+company);});
console.log(anchors);

const pow2 = num => num ** 2;
const fibPow2 = fib.map(pow2);
const fibSqrt = fib.map(Math.sqrt); 
console.log(fibPow2, fibSqrt);


// Filter function
const longCompanies = companies.filter(company => company.length > 3);
console.log(longCompanies); // [ 'Tefal', 'Xiaomi', 'Tesla' ]



// Task #1: Reverse a string
// const givenString = 'Hallo Herr Burgermeister';
// const reversedString = givenString.split('').reverse().join('');
// console.log(givenString, '-', reversedString);
