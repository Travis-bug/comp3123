/*
Purpose: This is the main entry point into our
Node.js server

We will set up server paths to the following:

/
/users
/userlist
/name
*/

let http = require("http")
let fs = require("fs")
let { users } = require("./data")

const PORT = 8088

var server = http.createServer((request, response) => {

    if(request.url == "/"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<h1>Node.js server at the root path</h1>")
        response.write("<p>You can go to the other paths to view their server writes as well</p>")
        response.end()
    }

    if(request.url == "/name"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write("<article> Laily Ajellu </article>")
        response.end()
    }

    if(request.url == "/users"){
        response.writeHead(200, {"Content-Type": "application/json"})
        let data = JSON.stringify(users)
        response.write(data)
        response.end()
    }

    if(request.url == "/userlist"){
        fs.readFile(__dirname + "/employees.json", "utf8", (error, data) => {
            response.writeHead(200, {"Content-Type": "application/json"})
            response.write(data)
            response.end()
        })
    }

})

server.listen(PORT)
console.log("The server started at this port" + PORT)