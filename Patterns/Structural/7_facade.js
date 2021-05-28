class Reports {
    constructor() {
        this.reports = []
    }

    add(report) {
        this.reports.push(report)
        return this.reply(report)
    }
}

class UserReports extends Reports {
    reply({
        id,
        user,
        details
    }) {
        return `[User Report] #${id}: "${details}" from ${user}`
    }
}

class SerivceReports extends Reports {
    reply({
        id,
        user,
        details
    }) {
        return `[Service Report] #${id}: "${details}" from ${user}`
    }
}

class ReportRegistry {
    register(user, type, details) {
        const id = Date.now()
        let report

        if (type === 'service') {
            report = new SerivceReports()
        } else {
            report = new UserReports()
        }

        return report.add({
            id,
            user,
            details
        })
    }
}

const registry = new ReportRegistry()
console.log(registry.register('Valera', 'service', 'bla bla bla bla bla'))
console.log(registry.register('Yasik', 'user', 'tra tra tra tra tra'))