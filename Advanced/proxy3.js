class Car {
    constructor(options) {
        this.color = options.color
        this.price = options.price
    }
}

const CarProxy = new Proxy(Car, {
    construct(target, options) {
        console.log('Constructing ...')
        console.log('Options:', options)
        return new Proxy(new target(...options), {
            get(t, prop) {
                if (!(prop in target)) {
                    return prop
                        .split('_')
                        .map(p => t[p])
                        .join(' ')
                        .trim()

                } else {
                    console.log('Accessing', prop)
                    return t[prop]
                }
            },
            set(t, prop, value) {
                console.log('Setting')
                t[prop] = value
                return true
            }
        })
    }
})

const cp = new CarProxy({
    color: 'blue',
    price: '3000$'
})
console.log(cp)