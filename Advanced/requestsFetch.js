const URL = 'https://jsonplaceholder.typicode.com/users/'

function sendRequest(method, url, payload = null) {
    const headers = {
        'Content-Type': 'application/json',
    }

    // By default fetch will use GET method
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            // return response.text()
            return response.json()
        }
        return response.json().then(error => {
            const err = new Error('Something went wrong')
            err.data = error
            throw err
        })
    })
}

// sendRequest('GET', URL)
//     .then(data => console.log(data))
//     .catch((statusCode, resp) => console.error(statusCode, resp))

someData = {foe: 'bar', john: 'doe'}

sendRequest('POST', URL, someData)
    .then(data => console.log(data))
    .catch((statusCode, resp) => console.error(statusCode, resp))