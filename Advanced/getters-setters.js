// npc is parent object (proto)
const npc = {
    'spawn': {'x': 200, 'y': 500, 'z': 10},
    'mortal': true,
    'godMode': false,
}

const superhero = Object.create(npc,
    {
        hp: {
            value: 200,
            enumerable: true,   // From now, `hp` will be shown in for loop
            writable: true,     // Can be overwritten
            configurable: true, // Allows deleting (`delete superhero.hp`)
        },
        attack: {
            value: 25,
            enumerable: false,
            writable: false,
            configurable: false,
        },
        info: {
            // Pythonic property getter and setter
            get() {
                return `Superhero has ${this.hp} hp and ${this.attack} attack`
            },
            set(value) {
                document.body.style.backgroundColor = 'blue'
                this.info = value
            },
        }
})
// Object.create takes two parameters: prototype (parent object) and key arguments

console.log(superhero)

// Does not overwrite default value, unless `writable` is true
superhero.hp = 500
superhero.attack = 30

// This will print nothing
for (let key in superhero) {
    if (superhero.hasOwnProperty(key)) {
        console.log('Key:', key, 'Value:', superhero[key])
    }
}

// hp is now deletable, since configurable is true
// delete superhero.hp
console.log(superhero.info)