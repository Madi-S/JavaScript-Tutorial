
// Declare
const animal = {
    massKg: 4000,
    fertile: true,
    name: 'Elephant',
    location: ['Africa', 'Asia'],
    greet: function () {
        console.log('Whuuuuhuuuauu')
    }
}

// Access
console.log(animal)
console.log(animal.massKg)
console.log(animal['location'])
animal.greet()

// Rewrite
animal.massKg = 4300
console.log(animal.massKg)

// Add
animal.isBig = true
console.log(animal.isBig)