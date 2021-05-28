class Car {
    constructor(model, price) {
        this.model = model
        this.price = price
    }


}


class CarFactory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate
        }
        const newCar = new Car(model, price)
        this.cars.push(newCar)
        
        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()

const toyota50 = factory.create('toyota', 3000)
console.log(toyota50)

const merc = factory.create('mercedez', 5000)
console.log(merc)

const toyotaLE = factory.create('toyota', 800) // Not creating new car instance (takes existing one from cache)
console.log(toyotaLE)
console.log(toyota50 === toyotaLE)