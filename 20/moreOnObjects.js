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