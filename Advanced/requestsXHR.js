// XHR = XML HTTP Request

const URL = 'https://jsonplaceholder.typicode.com/users/'

function sendRequest(method, url, payload = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        // open( Request Method, URL )
        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')

        // xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.status, xhr.response)
            } else {
                console.log(typeof xhr.response)        // string
                resolve(JSON.parse(xhr.response))
            }
        }
        xhr.onerror = () => {
            console.log(`Bad response: ${xhr.response}`)
        }

        xhr.send(JSON.stringify(payload)) // to send post data for post requests
    })
}

// sendRequest('GET', URL)
//     .then(data => console.log(data))
//     .catch((statusCode, resp) => console.error(statusCode, resp))

someData = {foe: 'bar', john: 'doe'}

sendRequest('POST', URL, someData)
    .then(data => console.log(data))
    .catch((statusCode, resp) => console.error(statusCode, resp))