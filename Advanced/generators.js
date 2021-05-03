function* numsGenerator() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const nums = numsGenerator()
console.log(nums.next())        // value 1, done: false
console.log(nums.next().value)
console.log(nums.next().done)
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())        // value: undefined, done: true


// Example of cycler:

function* cycler(...items) {
    while (true) {
        for (let item of items){
            yield item
        }
    }
}

const c = cycler('odd', 'even')


// Example of own generator

const iterator = {
    gen(n = 5) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return {value: ++i, done: false}
                } return {value: undefined, done: true}
            }
        }
    }
}
const itr = iterator.gen()
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())         // value: undefined, done: true


// For generator (it works with `Symbol`)

function* iter(n = 3) {
    for (let i = 1; i <= n; i++) {
        yield i
    }
}

// [Symbol.iterator] is responsible for `for` loop iteration
const iterable = {
    [Symbol.iterator]() {
        let i = 0
        return {
            next() {
                if (i < 3) {
                    return {value: ++i, done: false}
                } return {value: undefined, done: true}
            }
        }
    }
}

for (let k of iter()) {
    console.log(k)
}

for (let k of iterable) {
    console.log(k)
}