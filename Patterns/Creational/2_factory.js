class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 100
    }
}

class AdvancedMembership {
    constructor(name) {
        this.name = name
        this.cost = 200
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 300
    }
}

class MembershipFactory {
    static list = {
        simple: SimpleMembership,
        advanced: AdvancedMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`[${this.name}] (${this.type}) : ${this.cost} $`)
        }
        return member
    }
}

const factory = new MembershipFactory()
const members = [
    factory.create('Alexandra'),
    factory.create('John', 'premium'),
    factory.create('Marta', 'advanced'),
    factory.create('Sean', 'premiummm')
]

members.forEach(member => {
    member.define()
})