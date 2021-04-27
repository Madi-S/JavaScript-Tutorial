const person = {
    married: false,
    homeless: false,
    hasChildren: false,
}

const op = new Proxy(person, {
    // Access: object.property
    get(target, prop) {
        console.log('Getting prop', prop)
        return target[prop]
    },
    // Overwrite: object.property = value
    set(target, prop, value) {
        console.log('Setting prop', prop)
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No property ${prop} field in object`)
        }
    },
    // Check existence: propertyName in object
    has(target, prop) {
        console.log('Checking prop', prop)
        return ['married', 'homeless'].includes(prop)
    },
    // Delete: delete object.property
    deleteProperty(target, prop) {
        console.log('Deleting prop', prop)
        delete target[prop]
        return 'deleted!'
    }
})

console.log(op)
console.log(op.married)

op.married = true
// op.occupied = true
// Uncaught Error: No property occupied field in object

console.log('married' in op)
console.log('hasChildren' in op)

delete op.hasChildren
delete op.married