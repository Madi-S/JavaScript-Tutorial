const d = Date();
console.log(d);
// Thu Apr 22 2021 17:41:41 GMT+0600 (Восточный Казахстан)

const ms = Date.UTC(2000, 3, 23);
console.log(ms);
// Returns the number of millisecodns from the Unix time till given date

const now = Date.now();
// Works like time.time() but with milliseconds 
console.log(Date.now());
setTimeout(() =>{
    console.log('Five seconds elapsed');
    console.log(Date.now());
    console.log(now - Date.now());
}, 5000);

const parsed = Date.parse('2004/02/04');
console.log(parsed);

// Convert milliseconds to date format
const birthday = Date(parsed);
console.log(birthday);