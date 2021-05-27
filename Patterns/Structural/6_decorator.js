class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `http://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function () {
        return '[AWS INFO] ' + server.url
    }
    return server
}

function digitalOcean(server) {
    server.isDigitalOcean = true
    server.port = server.port.toString()
    return server
}


const s1 = aws(new Server('12.22.10.43', 8000))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = digitalOcean(new Server('22.43.90.81', 3535))
console.log(s2.isDigitalOcean)
console.log(typeof s2.port)