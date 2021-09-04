const {leer, escribir} = require('../models/pelis_db');

const ghibli = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'ghibli')
    }
    res.render('pelicula', locals)
}

const mononoke = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'mononoke')
    }
    res.render('pelicula', locals)
}

const totoro = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'totoro')
    }
    res.render('pelicula', locals)
}

const chihiro = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'chihiro')
    }
    res.render('pelicula', locals)
}

const nausicaa = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'nausicaa')
    }
    res.render('pelicula', locals)
}

const luciernaga = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'luciernaga')
    }
    res.render('pelicula', locals)
}

const kaguya = (req, res) => {
    const locals = {
        pelicula : leer.find(p => p.id === 'kaguya')
    }
    res.render('pelicula', locals)
}

module.exports = {
    ghibli,
    mononoke,
    totoro,
    chihiro,
    kaguya,
    nausicaa,
    luciernaga,
}