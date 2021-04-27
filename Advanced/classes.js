
// const animal = {
//     fertile: true,
//     name: 'Animal',
//     location: 'Africa'
// }

class Animal {
    // static variables are only available for classes
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.fertile = options.fertile
        this.location = options.location
    }

    greet() {
        console.log('Greetings fellow humans!')
    }
}

const zebra = new Animal({
    'name': 'zebra',
    'fertile': true,
    'location': 'africa'
})

console.log(Animal, zebra)
console.log(Animal.type, zebra.type)


// Create class, which inherits from parent class
class Dog extends Animal {
    constructor(options) {
        // To avoid error - parent class constructor must be called first
        super(options)
        this.friendly = options.friendly
    }

    // Overwrite parent method
    greet() {
        // To call parent methods
        super.greet()
        console.log('Bark bark!')
    }

    get fertilityInfo() {
        if (this.fertile) {
            return 'This dog is fertile'
        } else {
            return 'Unfortunately, this dog cannot have offspring'
        }
    }
    set fertilityInfo(fertilityStatus) {
        this.fertile = fertilityStatus
    }
}

const d = new Dog({
    'name': 'dog',
    'fertile': true,
    'location': 'worldwide',
    'friendly': true
})
console.log(d)
console.log(d.fertilityInfo)
d.greet()