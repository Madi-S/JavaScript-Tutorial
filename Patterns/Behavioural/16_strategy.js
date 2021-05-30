class Vehicle {
    travelTime() {
        return this.timeTaken
    }
}

class Car extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 100
    }
}

class Plane extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 20
    }
}

class Bike extends Vehicle {
    constructor() {
        super()
        this.timeTaken = 600
    }
}

class Commute {
    travel(transport) {
        return transport.travelTime()
    }
}

const commute = new Commute()

console.log(commute.travel(new Car()))
console.log(commute.travel(new Bike()))
console.log(commute.travel(new Plane()))