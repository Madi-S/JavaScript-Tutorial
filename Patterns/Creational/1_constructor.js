// Old implementation
// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:5000`
// }


// Modern implementation
class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl = function() {
        return `https://${this.ip}:5000`
    }
}

const aws = new Server('Amazon Web Services', '11.23.22.51')
console.log(aws.getUrl())