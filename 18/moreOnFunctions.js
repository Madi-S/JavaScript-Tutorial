
sayHello(name='Jack Denmo');
// greet('Wanderer') // Cannot access 'greet' before initialization

// Function Declaration
function sayHello(name){
    console.log(`Hello ${name}`);
}


// Function expression
const greet = function greet(name){
    console.log(`Greetings ${name}`);
}

greet('Traveler');


console.log(typeof sayHello); // function
console.log(typeof greet);    // function

console.dir(sayHello);
// Function is just an object


// Do something every n milliseconds 
let counter = 0;
const interval = setInterval(function(){
    if (counter === 5){
        clearInterval(interval);
    } else {
        console.log(++counter);
    }
}, 1000);

// Do something in n milliseconds
const timeout = setTimeout(function(){
    console.log('Greetings from the past');
    clearTimeout(timeout);
}, 5000);


// Arrow functions
const arrow1 = (name) => {
    console.log('Hallo Herr', name);
}
const arrow2 = name => console.log('Hallo Frau', name);
const arrow3 = name => `Greetings ${name}`; // This function does return value

arrow1('Maximilian');
arrow2('Anita');
console.log(arrow3('Ignat'));

// Default arguments
const sum = (a, b = a * 3) => a + b;

console.log(sum(2, 30));
console.log(sum(2));        // 8

function sumAll(...all) {
    console.log(all);
    let result = 0;
    for (let num of all) {
        result += num;
    }
    return result;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7));

function createUser(lastName) {
    return function(firstName) {
        console.log(`User: ${lastName} ${firstName}`);
    }
}

userAlexeev = createUser('Alexeev');
userAlexeev('Andery');
userAlexeev('Svyatoslav');