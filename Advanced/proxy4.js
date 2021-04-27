// Example #1: Wrapper. Aim: provide given default value for non-existing properties
const withDefaultValue = (target, defaultValue = '') => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
    'x': 20,
    'y': 22,
}, 0)

console.log(position)
console.log(position.x)
console.log(position.y)

// Give 0
console.log(position.z)
console.log(position.name)

// Example #2: Hidden properties. Aim: object's properties, which start with `-` must be hidden, not accessible
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && !(prop.startsWith(prefix)),
        ownKeys: (obj) => Reflect.ownKeys(obj).filter(key => !key.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : undefined
        // `receiver` in here is `Proxy` we are working with
    })
}

// What the hell is `Reflect`? It helps to work with objects in details
console.log(Reflect.ownKeys(position)) // ["x", "y"]

const bankAccount = withHiddenProps({
    'number': 'KZ04932HJ29A934J',
    'holder': 'Timo Werner',
    '_password': 'qwerty1!',
    '_uuid4': 'ea937e2b-a2ba-4739-ba04-bcec30c942a0'
})

console.log(bankAccount)
console.log(bankAccount.holder)

// Give undefined
console.log(bankAccount._password)
console.log(bankAccount._uuid4)

// Give false
console.log('_password' in bankAccount)

// Give only `number` and `holder`
for (let key in bankAccount) console.log(key)
console.log(Object.keys(bankAccount))