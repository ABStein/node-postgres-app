// ./app.js
const express = require('express')
const statusCodes = require('http-status-codes');


/**
 * Routes
 */
const router = require('./routes/userRoute.js');

const app = express()
const port = 3000
const dotenv = require('dotenv').config('.env');
// aws secrets manager middlware
// app.use(async (req, res, next) => {
//   await initializeSecrets();
//   next();
// });

// returns middleware that only parses json and setting to strict to allow
// anything that JSON.parse will accept
app.use(express.json({ strict: false }))

// ALL ROUTES WILL EXIST HERE
app.use('/', router);


// 404 handler
app.use((req, res) => {
  res.status(statusCodes.NOT_FOUND).json({
    code: statusCodes.NOT_FOUND,
    message: 'The requested resource does not exist',
  });
});

app.use((err, req, res, next) => {
  // send error to the console
  console.log(JSON.stringify(err));
  
  res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: JSON.stringify(err) });
})



// for dev
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})