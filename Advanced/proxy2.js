const format = text => `Formatted text: ${text}`

const fp = new Proxy(format, {
    // Apply method responsible for calling the function
    apply(target, thisArg, args) {
        // Target - function itself
        // thisArg - context (object that called the function, if applied)
        // Args - arguments that were passed to the function
        console.log('Calling fp ...')

        console.log('Target:', target)
        console.log('This:', thisArg)
        console.log('Args:', args)

        return target.apply(thisArg, args).toUpperCase()
    }
})