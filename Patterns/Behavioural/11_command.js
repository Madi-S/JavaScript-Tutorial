class MyMath {
    constructor(intialValue = 2) {
        this.num = intialValue
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandsExecuted = []
    }

    execute(command) {
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(4))

console.log(x.execute('square'))    // 16
console.log(x.execute('cube'))      // 64

console.log(x.commandsExecuted)
// [ 'square', 'cube' ]
// Useful for saving metadata etc