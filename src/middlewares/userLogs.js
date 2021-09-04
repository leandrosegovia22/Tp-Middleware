const createLog = require('../models/logger');
const { leer, actualizar } = require('../models/pelis_db');
const leerAdmin = require("../models/users_db");


const aumentar = req => {
    const peli = leer.find(p => p.path === req.url);
    if (peli) {
        peli.conteo++;
        actualizar(peli);
    }
}

const contar = (req, res, next) => {
    if (req._parsedUrl.pathname == '/admin') {
        const name = req.query.user;
        (name && leerAdmin.includes(name.toLowerCase()))
            ? createLog(`\n${name.replace(name[0], name[0].toUpperCase())} Ingreso a ${req.url}\n`)
            : createLog(`\nUn usuario anónimo intento ingresar a ${req.url}\n`)
    }
    aumentar(req);
    next();
}

module.exports = contar;