class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(o => o !== observer)
    }

    emit(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}


class Observer {
    constructor(state) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const obs1 = new Observer(1)
const obs2 = new Observer(5)
const obs3 = new Observer(10)

stream$.subscribe(obs1)
stream$.subscribe(obs2)
stream$.subscribe(obs3)

stream$.emit({type: 'INCREMENT'})
stream$.emit({type: 'DECREMENT'})
stream$.emit({type: 'INCREMENT'})
stream$.emit({type: 'ADD', payload: 9})
// stream$.emit({type: 'SUB'})



console.log(obs1.state)
console.log(obs2.state)
console.log(obs3.state)
