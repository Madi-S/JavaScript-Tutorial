
// const username = 'admin'
// const username = 'jeka'
// const username = 'jeka43'
const username = '25'

// Difference between == and ===
// == does campare two variables neglecting their data type (like `is` in python)
// === does consider variables' data type (exactly equal, pythonic `==`)

if (username == 'admin'){
    console.log('Hello Admin!')
}
else if (username == 'jeka') {
    console.log('Hi there Jeka!')
}
else if (username === 25) {
    console.log('I will not be executed ;(')
}
else if (username == 25) {
    console.log('Wow, a number!')
}
else {
    console.log('Greetings Wanderer!')
}

const isPregnant = true
// if (isPregnant) {
//     console.log('Congratulations!')
// } 
// else {
//     console.log('You are lucky')
// }

// Shorter method
isPregnant ? console.log('Congratulations') : console.log('You are lucky')

const isBoy = false

if (isBoy && isPregnant){
    console.log('Gratz, you gonna have a boy!')
}
else if (!isBoy && isPregnant){
    console.log('Fantastic, you gonna have a girl!')
}

hasDog = true
hasCat = false
if ((hasCat || hasDog) && isPregnant){
    console.log('Wow, your kid gonna great time playing with your pet!')
}