// WeakSet can contain only objects
const users = [
    {name: 'foe'},
    {name: 'bar'},
    {name: 'doe'},
    {name: 'joe'},
]

const lastVisits = new WeakSet()

lastVisits.add(users[0]).add(users[1])
console.log(lastVisits.has(users[0]))

users.splice(1, 1)
// delete users[1]

console.log(lastVisits.has(users[1]))

