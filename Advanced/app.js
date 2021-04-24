function greet() {
    console.log('Hi', this)
}
greet()
// HI `Window`

const npc = {
    hp: 100,
    attack: 25,
    sayHi: greet,
    name: 'default',

    sayHiWindow: greet.bind(window),
    sayHiDocument: greet.bind(document),

    logInfo() {
        console.group(`${this.name} info:`)
        console.log(`My name is ${this.name}`)
        console.log(`My HP is ${this.hp}`)
        console.groupEnd()
    }
}
npc.sayHi()
// Hi {skin: "default", hp: 100, attack: 25, sayHi: ƒ}
// Hence, `this` is the object that called the function

// To pass other object to `this` we can bind the function
npc.sayHiWindow()
npc.sayHiDocument()

elephant = Object.create(npc)
elephant.name = 'Elephant George'
elephant.hp = 100000
elephant.logInfo()
// My name is Elephant George

// Or we can use `bind` to store functions, `apply` or `call` to call function straight away
const dog = {
    'name': 'Buck',
    'attack': 50,
    'hp': 250
}
const dogLogInfoFunc = npc.logInfo.bind(dog)
dogLogInfoFunc()
npc.logInfo.apply(dog)
npc.logInfo.call(dog)

