console.log('Requesting data ...')

// setTimeout(() => {
//     console.log('Preparing to fetch data ...')
//
//     const backendData = {
//         'port': 6379,
//         'ip': '124.7.11.9',
//         'server': 'nginx',
//         'status': 'working',
//     }
//
//     setTimeout(() => {
//         backendData.changed = true
//         console.log('Data fetched:', backendData)
//     }, 1500)
//
// }, 2300)


// The implementation above is bad (complex), since callbacks are nested (callback inside callback ...)
// Hence, there is necessity to use `promise`
// Promise(callback)
// `callback` takes two parameters: `resolve` and `reject`
// `resolve` is called, when async operation has been executed successfully
// `reject` is the opposite


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing to fetch data ...')
        const backendData = {
            'port': 6379,
            'ip': '124.7.11.9',
            'server': 'nginx',
            'status': 'working',
        }
        resolve(backendData) // `promise` ends its execution
    }, 2300)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.changed = true
            resolve(data)
            // reject(data) // -> precipitates an error
        }, 1500)
    })
})
    .then(clientData => {
    console.log('Data received:', clientData)
    clientData.fromPromise = true
    return clientData
})
    .then(data => {
    console.log('Final data:', data)
    })
    .catch(err => console.log('Error with clientData', err))
    .finally(() => console.log('Executed at any rate'))

// It is not necessary to return `Promise` to continue the chain of `then`
// Promises also handy, when catching errors