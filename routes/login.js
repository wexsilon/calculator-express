const express = require('express');

const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

const router = express.Router();

router.get('/', loginController.getMethod);

router.get('/signup', signupController.getMethod);

module.exports = router;