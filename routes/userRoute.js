// ./routes/index.js
const express = require('express');
const users = require('../controller/user')

const router = express.Router();

// The last piece of these routes contains regex to make sure a number is given.
router.get(
    '/users/:id(\\d+)/',
    async (req, res, next) => users.getUser(req, res, next),
);

module.exports = router;