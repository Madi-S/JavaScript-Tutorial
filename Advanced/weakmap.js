let obj = {name: 'weakmap'}
const arr = [obj]

// obj = null
console.log(obj, arr)
// null [ { name: 'weakmap' } ]

// Only objects can be keys in WeakMap
const map = new WeakMap([
    [obj, 'obj value'],
])
// `get` `set` `delete` and `has` methods
console.log(map.get(obj))
obj = null
// After object was assigned to `null`, it is reference in WeakMap also becomes `null`
console.log(map.get(obj)) // undefined
console.log(map)          // WeakMap { <items unknown> }


// === Cache Example ===

const cache = new WeakMap()
function cacheUser(user) {
    if (cache.has(user)) {
        return cache.get(user)
    } return cache.set(user, Date.now())
}

let jack = {name: 'jack'}
let john = {name: 'john'}

cacheUser(jack)
cacheUser(john)

jack = null

console.log(cache.has(jack), cache.has(john)) // false true
