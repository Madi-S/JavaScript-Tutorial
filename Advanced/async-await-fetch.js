const delay = ms => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// `then` implementation

// function fetchData() {
//     console.log('Starting to fetch data ...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchData()
//     .then(data => {
//         console.log('JSON Data received:', data)
//     })
//     .catch(e => console.log('Fix the error:', e))


// The same function using `async`, `await` (it is just a shell for promises)

async function asyncFetchData() {
    console.log('Starting to fetch data ...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('JSON Data received:', data)
    } catch(e) {
        console.error('Error occurred:', e)
    } finally {
        console.log('Finally')
    }
}

asyncFetchData()