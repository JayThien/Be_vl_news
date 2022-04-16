'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/createUser', userController.createUser);


module.exports = {
    routes: router
}