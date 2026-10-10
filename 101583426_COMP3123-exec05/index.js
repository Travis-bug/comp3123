const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/users');

// Parse JSON request bodies so /login can read username and password
app.use(express.json());

// Add User Router
// FIX: the path needs a leading slash ('api/v1/user' never matches any request)
app.use('/api/v1/user', userRouter);

/*
- Create new html file name home.html
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
// FIX: `router` was not defined in this file - routes here belong to `app`
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Test route used to show the error handler working (throws on purpose)
app.get('/error', (req, res) => {
  throw new Error('Test error to trigger the error handling middleware');
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('Server Error');
});

// FIX: environment variables are case-sensitive; hosting platforms set PORT (upper case)
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log('Web Server is listening at port ' + PORT);
});
