function newtworkFetch(url) {
    return `Response from ${url}`
}

const fetchCache = new Set() // WeakSet

const proxiedFetch = new Proxy(newtworkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]

        if (fetchCache.has(url)) {
            return `[CACHED] Response from ${url}`
        } else {
            fetchCache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('youtube.com'))
console.log(proxiedFetch('vk.com'))
console.log(proxiedFetch('youtube.com'))
console.log(proxiedFetch('facebook.com'))
console.log(proxiedFetch('vk.com'))