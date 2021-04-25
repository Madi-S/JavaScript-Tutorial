// Call Stack, Web APIs, Callback Queue

console.log('Instant message')

setTimeout(() => {
    console.log('Inside timeout after 2 sec')
}, 2000)

setTimeout(() => {
    console.log('Instant? No.')
}, 0)

console.log('Another instant message')

// setTimeout goes to Web APIs
// Then, it goes to Callback Queue
// Finally, it goes back to Call Stack and is executed