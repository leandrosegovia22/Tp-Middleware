const { main } = require('../controllers/mainControllers');

const express = require('express'),
      router = express.Router();

router.get('/', main)



module.exports = router;