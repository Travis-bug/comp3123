var http = require("http");
// Employee Module
const employeeModule = require("./Employee");
console.log("Lab 03 -  NodeJs");

// Fixed: every route now sets the right Content-Type header and stops (return)
// after it responds. Before, the 404 response ran even after a route matched.

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, { "Content-Type": "application/json" })
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        return
    }

    if (req.url === '/') {
        // Welcome message as HTML
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end("<h1>Welcome to Lab Exercise 03</h1>")
        return
    }

    if (req.url === '/employee') {
        // All details for every employee as JSON
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(employeeModule.getAllEmployees(), null, 2))
        return
    }

    if (req.url === '/employee/names') {
        // Full names (first + last) in ascending order as a JSON array
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(employeeModule.getEmployeeNames(), null, 2))
        return
    }

    if (req.url === '/employee/totalsalary') {
        // Sum of all salaries, e.g. { "total_salary" : 100 }
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ total_salary: employeeModule.getTotalSalary() }, null, 2))
        return
    }

    // No route matched
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
