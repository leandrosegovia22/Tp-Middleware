const { ghibli, mononoke,totoro,chihiro,nausicaa,luciernaga,kaguya } = require('../controllers/pelisControllers');

const express = require('express'),
      router = express.Router();

router.get('/', ghibli)
router.get('/mononoke', mononoke)
router.get('/totoro', totoro)
router.get('/chihiro', chihiro)
router.get('/nausicaa', nausicaa)
router.get('/luciernaga', luciernaga)
router.get('/kaguya', kaguya)


module.exports = router;