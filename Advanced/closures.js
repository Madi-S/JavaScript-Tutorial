// Closures: function inside function

function createBasiCalculatorWithName(name) {
    return function (expr) {
        console.log(`${name} says that "${expr}" is equal to "${eval(expr)}"`)
    }
}

const bc = createBasiCalculatorWithName('Usmanova')
bc('5 + 5')

const calc = createBasiCalculatorWithName('Toporkova')
calc('2 + 2 * 2')


function createURLGenerator(baseURL) {
    return function(innerURL) {
        return `https://${baseURL}/${innerURL}`
    }
}

const yt = createURLGenerator('youtube.com')
console.log(yt('trends'))
console.log(yt('channel/1d4s654f123lk6'))
console.log(yt('profile/settings/password'))

// Task: create own `bind` method

function bind(context, func) {
    return function(...args) {
        func.apply(context, args)
    }
}

function logInfo() {
    console.log(this.name, this.age)
}
const person1 = {name: 'Jack', age: 50}
const person2 = {name: 'Mark', age: 43}
bind(person1, logInfo)()
bind(person2, logInfo)()