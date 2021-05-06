// DataBase that can store information even after reloading a page (up to 5MB)
// Yeah, it is larger than cookies but it is more secure -> data stored only locally, does not go to server via request
// Regrettably, it is not recommended to use LocalStorage on production because it is synchronous

const myNumber = 42

let num = localStorage.getItem('number')
console.log(num)        // null

// setItem(key, stringValue)
localStorage.setItem('number', myNumber.toString())
num = localStorage.getItem('number')
console.log(num)        // 42

localStorage.removeItem('number')   // removes particular key
localStorage.clear()                    // removes all keys

const person = {
    name: 'Arsen Wenger',
    age: 90
}
localStorage.setItem('person', JSON.stringify(person))

const personData = JSON.parse(localStorage.getItem('person'))
console.log(personData)


// Called every time something is set to localStorage in another tab
window.addEventListener('storage', event => {
    console.log(event)
    // StorageEvent {isTrusted: true, key: "number", oldValue: "42", newValue: null, url: "file: "index.html", …}
    alert('Data has been changed!')
})

// window.onstorage = () => {}