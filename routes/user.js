const express = require('express');

const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');
const logoutController = require('../controllers/logoutController');

const router = express.Router();

router.route('/login')
    .get(loginController.getMethod)
    .post(loginController.postMethod);

router.route('/signup')
    .get(signupController.getMethod)
    .post(signupController.postMethod);

router.route('/logout')
    .get(logoutController.getMethod)
    .post(loginController.postMethod);

module.exports = router;