const student = {
    id: 1,
    name: 'Cruella',
    isFreshman: true,
    age: 19,
    greet() {
        console.log('Greetings!');
    },
    'student home country zip code': '020000',
    [5 ** 2]: 'yes 25',
    employed: undefined,

};

number = 12.5 * 2;
student.id++
student.name += ' Johnson'

console.log(student.id);
console.log(student['name']);
console.log(student['isFreshman']);
console.log(student['student home country zip code']);
console.log(student[number]);
student.greet();

// Set key-value pair to undefined
student[25] = undefined;
console.log(student);

// Deleting key-value pair
delete student[25];
console.log(student);

// const id = student.id;
// const name = student.name;
// const isFreshman = student.isFreshman
// console.log(id, name, isFreshman);

// A better way to assign object's values to some variables
const {id, name, isFreshman, age: studentAge, employed: studentIsEmployed = false} = student;
console.log(id, name, isFreshman, studentAge, studentIsEmployed);


// Key can go in __proto__'s key (prototype's/parent class's keys,)
for (let key in student) {
    if (student.hasOwnProperty(key)){
        console.log(key, ':', student[key]);
    }
}

// Loop through keys
const keys =  Object.keys(student); // returns stuendt's only keys
console.log(keys); // An array of its keys 
keys.forEach(key => {
    console.log(key, student[key]);
})

// Context 

const person = {
    id: 666, 
    showThis() {console.info('this:', this);},
    info() {console.info('Person id:', this.id);}
}

person.info();
person.showThis();

const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this));
    },

    items() {
        Object.keys(this).forEach( key => {
            console.log('Key:', key, '| Value:', this[key]);
        })
    },

    withParams(top = false, between= false, bottom = false) {
        if (top) {
            console.log('----- Start -----');
        }
        Object.keys(this).forEach((key, index, array) =>{
                console.log('Key:', key, '| Value:', this[key]);
                if (between && index !== array.length - 1) {
                    console.log('-----------------');
                }
            });
        if (bottom) {
            console.log('------ End ------');
        }
    },
}

// Bind does create self function but does not execute it
const boundFunc = logger.keys.bind(student);
boundFunc();

// Call function by passing `someObject` to `this` parameter (like self in python)
const someObject = {a: 3, b: 4, c: 5};
logger.withParams.call(someObject, true, true, true);

// Pretty much the same method but takes only two parameters (object + array of arguments)
logger.withParams.apply(someObject, [true, true, true]);