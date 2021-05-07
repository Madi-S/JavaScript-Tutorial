const s = Symbol('test')
const other = Symbol('test')

console.log(s)
console.log(other)

console.log(s == other)     // false

const obj = {
    test: 'test',
    name: 'Jack',
    [s]: 'metaData',
}

console.log(obj[s])         // metaData

for (let key in obj) {
    console.log(key)    // no Symbol('test')
}