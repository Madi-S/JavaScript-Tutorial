class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }
                else {
                    this.index = 0
                    return {
                        value: void 0,
                        done: true
                    }
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0

    while (index < collection.length) {
        yield collection[index++]
    }
}

const iterator = new MyIterator(['BMW', 'Toyota', 'Volvo', 'Mercedez'])
for (const value of iterator) {
    console.log('Value:', value)
}

const gen = generator(['Xiaomi', 'Samsung', 'Apple', 'Oppo'])

console.log(gen.next())
console.log(gen.next())

for (const value of gen) {
    console.log(value)
}