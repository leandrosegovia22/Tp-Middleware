const saludo = require('../controllers/usersController');

const express = require('express'),
      router = express.Router();

router.get('/', saludo) 

module.exports = router;