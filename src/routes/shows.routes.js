const express = require('express');
const router = express.Router();
const controlModule = require('../controllers/tvController');

router.get('/', controlModule.homePage);

router.get('/shows/:id', controlModule.getDetails);

module.exports = router