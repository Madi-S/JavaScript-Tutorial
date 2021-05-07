const privateVar = 42

export const PORT = 6379

export function sum(a, b) {
    return a + b
}

export default {
    log() {
        console.log(privateVar)
    }
}



