class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(msg, to) {
        this.room.send(msg, this, to)
    }

    receive(msg, from) {
        console.log(`[${from.name}] -> [${this.name}] : ${msg}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(msg, from, to) {
        if (to) {
            to.receive(msg, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(msg, from)
                }
            })
        }
    }
}

const jeka = new User('Jeka')
const toma = new User('Toma')
const dana = new User('Dana')

const room1 = new ChatRoom()

room1.register(jeka)
room1.register(toma)
room1.register(dana)

jeka.send('Hello Dana', dana)
dana.send('Hi Jeka', jeka)
toma.send('Howdy everybody')