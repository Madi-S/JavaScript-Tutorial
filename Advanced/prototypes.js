const person = {
    isAlive: true,
    location: 'Earth',
    greet: function() {
        console.log('greetings')
    }
}
person.greet()

// __proto__ is a parent class
// Any objects inherit methods from it (from top (local environment) to the bottom)

const student = new Object({
    name: 'Alex',
    age: 21,
    greet: function() {
        console.log('Hallo alles!')
    }
})

// This will add this function to Object globally
// By the way everything in JavaScript is an object (everything inherits from it)
Object.prototype.sayBye = function() {
    console.log('Bye bye!')
}

// To create instance of the object
const user = Object.create(person)
user.name = 'Jack'
user.age = 71
user.location = 'San Francisco'