// ./routes/index.js
const express = require('express');
const users = require('../controller/user')

const router = express.Router();

router.get(
    '/users/',
    async (req, res, next) => users.getAllUsers(req, res, next),
);

// The last piece of this routes contains regex to make sure a number is given.
router.get(
    '/users/:id(\\d+)/',
    async (req, res, next) => users.getUser(req, res, next),
);

module.exports = router;