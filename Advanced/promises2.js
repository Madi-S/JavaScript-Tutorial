const sleep = sec => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), sec * 1000)
})
}

// sleep(2).then(() => console.log('After 2 seconds'))
// sleep(2.5).then(() => console.log('After 2.5 seconds'))
// sleep(3).then(() => console.log('After 3 seconds'))


//    Will be executed after all promises are executed
Promise.all([sleep(0.1), sleep(2.5), sleep(4)])
    .then(() => {
        console.log('Everything has been executed')
    })

//    Will be executed after at least 1 promise is executed
Promise.race([sleep(0.1), sleep(2.5), sleep(4)])
    .then(() => {
        console.log('First has been executed')
    })