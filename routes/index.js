const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.getMethod);

router.post('/', indexController.postMethod);

module.exports = router;