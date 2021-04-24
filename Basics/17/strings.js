const fullName = 'John Doe';
const age = 40;

let toPrint = 'Hi everyone, I am ' + fullName + ' and I am ' + age + ' years old';
console.log(toPrint);

// Pythonic f string (functions, variables can be used inside ${ } but no if statements)
toPrint = `Hi everyone, I am ${fullName} and I am ${age} years old. I also have ${Math.round(Math.random()*10)} pets. By the way, I am ${age > 30 ? '' : 'not'} married`;
console.log(toPrint);

// Tabulation is conserved
const htmlCode = `
    <html>
        <head>
            <title>Test</title>
        </head>
        <body>
            <h1>Hello, I am ${fullName}</h1>
        </body>
    </html>
`;
// console.log(htmlCode);


// Get characters count 
console.log(fullName.length);


// Useful HTML methods
console.log(fullName.link('https://github.com/Madi-S'));
console.log(fullName.bold());
console.log(fullName.italics());
console.log(fullName.fontcolor('#fa8e47'));


// Get specific character based on index
console.log(fullName[2]);
console.log(fullName.charAt(2));


// Lower/upper case
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// Some usefule methods
console.log(fullName.startsWith('John'));
console.log(fullName.endsWith('en'));
console.log(fullName.replace('o', 'i')); // Replace first occurence with given value
console.log(fullName.concat(' is great'));
console.log(fullName.normalize());


// Convert string to array by given delimiter
let data = fullName.split(' ');
console.log(data[0], '\n', data[1]);


// Repeat string n times
console.log('Hello World! '.repeat(5));


// Checks if given string exists
console.log(fullName.includes('Doe'));


// Get first/last position of given string or -1 if does not exist
console.log(fullName.indexOf('o'));
console.log(fullName.lastIndexOf('o'));


// Pythonic slicing fullName[:4]
console.log(fullName.slice(0, 4));


// Pythonic strip() method
weirdString = '      hi  there !    ';
console.log(weirdString.trim());
console.log(weirdString.trimLeft());
console.log(weirdString.trimRight());


function logPerson(s, name, age) {
    console.log(s, name, age);
    return 'Some info about person';
}

const name = 'Rakhat';
const output = logPerson`Name: ${name}, age: ${age}!`;
console.log(output);