const animal = {
    name: 'Tiger',
    massKg: 3000,
    fertile: true,
}

const entries = [
    ['name', 'Tiger'],
    ['massKg', 3000],
    ['fertile', true]
]

console.log(Object.entries(animal))
// [ [ 'name', 'Tiger' ], [ 'massKg', 3000 ], [ 'fertile', true ] ]

console.log(Object.fromEntries(entries))
// { name: 'Tiger', massKg: 3000, fertile: true }

const map = new Map(entries)
console.log(map)
// Map(3) { 'name' => 'Tiger', 'massKg' => 3000, 'fertile' => true }
console.log(map.get('massKg') == animal['massKg'])

map
    .set('newField', 'some value')
    .set(animal, 'object value')

// Anything can be a `key` in `map`
console.log(map.get(animal))

if (map.delete(animal)) console.log('Deleted successfully')
console.log(map.has('newField'))
// console.log(map.clear())
console.log(map.size)
console.log(map.entries())

for (let [key, val] of map) {
    console.log(`Key: ${key} and value ${val}`)
}

for (let val of map.values()) {
    console.log(val)
}

for (let key of map.keys()) {
    console.log(key)
}

map.forEach((val, key, map_) => {
    console.log(val, key)
})

let array = [...map]
console.log(array)

array = Array.from(map)
console.log(array)

const someMap = Object.fromEntries(array)
console.log(someMap)

const users = [
    {name: 'Jack'},
    {name: 'Liza'},
    {name: 'David'}
]

const lastVisits = new Map()
lastVisits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[1], new Date(new Date().getTime() - 1000 * 60))

function getLastVisit(user) {
    return lastVisits.get(user)
}

console.log(getLastVisit(users[1]))
