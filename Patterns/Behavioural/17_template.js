class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        console.log(`${this.name} is working: ${this.responsibilities()}`)
    }

    getPaid() {
        console.log(`${this.name} is getting ${this.salary}$`)
    }
}


class Doctor extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'aiding people'
    }
}

class Builder extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'building houses'
    }
}

const doctor = new Doctor('Jeremy', 12000)
const builder = new Builder('Unari', 5000) 

doctor.work()
doctor.getPaid()

builder.work()
builder.work()
builder.work()
builder.getPaid()