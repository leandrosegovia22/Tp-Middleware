const {leer} = require('../models/pelis_db');

const main = (req, res) => {
    const locals = {
        title: 'Home - Contador',
        peliculas: leer.filter(p => p.id !== 'ghibli')
    }
    res.render('index', locals)
}

module.exports = {
    main,
}