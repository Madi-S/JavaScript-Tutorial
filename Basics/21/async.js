// JavaScript is single-threaded language (but very fast and has support for async)
// All this functionality is provided by `Event Loop`

// Timeouts and intervals are asynchronous

// const timeout = setTimeout(() => {
//     console.log('After timeout');
// }, 1250);
// clearTimeout(timeout); // Timeout will be canceled

// const interval = setInterval(() => {
//     console.log('Hello');
// }, 2500);
// clearInterval(interval)

// const delay = (callback, seconds = 1) => {
//     setInterval(callback, seconds * 1000)
// };

// delay(() => {
//     console.log('After 2 seconds');
// }, 2);

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            // reject('CRITICAL ERROR 50');
        }, wait);
    });
    return promise;
};

delay(2500)
    .then(() => console.log('After 2.5 seconds'))
    .catch((err) => console.error('Something went wrong:', err))
    .finally(() => console.log('Executed at any rate'));


const getData = () => new Promise(resolve => resolve([
    1, 2, 3, 4, 5, 6, 7, 8, 9
]));
// getData().then(data => console.log(data));


async function asyncFunc() {
    try {
        await delay(3000);
        const data = await getData(); // Only after delay was execute, getData will be called
        console.log('In async function', data);
        // sadfljlsadfjlk
    } catch (e) {
        console.log('Boss, fix the error:', e);
    } finally {
        console.log('Finished');
    }
}
asyncFunc();
