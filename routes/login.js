const express = require('express');

const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

const router = express.Router();

router.route('/')
    .get(loginController.getMethod)
    .post(loginController.postMethod);

router.route('/signup')
    .get(signupController.getMethod)
    .post(signupController.postMethod);


module.exports = router;