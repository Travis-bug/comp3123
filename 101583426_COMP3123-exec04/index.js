/*
Purpose:
COMP3123 Exercise 04
Express framework with Node.js
*/

const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 3000;


// ------------------------------------------------------
// MIDDLEWARE
// ------------------------------------------------------

// Serve static files from the public folder
app.use(express.static("public"));

// Serve JSON request bodies
app.use(express.json());

// Serve traditional HTML/form body
app.use(express.urlencoded({ extended: true }));


// ------------------------------------------------------
// ROOT ROUTE
// ------------------------------------------------------

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root path of the server</h1>");
});


// ------------------------------------------------------
// 1. GET /hello
// ------------------------------------------------------

app.get("/hello", (request, response) => {
    response.type("text/plain").send("Hello Express JS");
});


// ------------------------------------------------------
// 2. GET /user
// Query parameters: firstname and lastname
// ------------------------------------------------------

app.get("/user", (request, response) => {

    const firstname = request.query.firstname || "Pritesh";
    const lastname = request.query.lastname || "Patel";

    response.json({
        firstname: firstname,
        lastname: lastname
    });
});


// ------------------------------------------------------
// 3. POST /user/:firstname/:lastname
// Path parameters
// ------------------------------------------------------

app.post("/user/:firstname/:lastname", (request, response) => {

    const firstname = request.params.firstname;
    const lastname = request.params.lastname;

    response.json({
        firstname: firstname,
        lastname: lastname
    });
});


// ------------------------------------------------------
// 4. POST /users
// JSON body containing an array of users
// ------------------------------------------------------

app.post("/users", (request, response) => {

    const users = Array.isArray(request.body)
        ? request.body
        : [];

    response.json(users);
});


// ------------------------------------------------------
// START SERVER
// ------------------------------------------------------

app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost:" + SERVER_PORT);
});