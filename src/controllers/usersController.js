const leerAdmin = require("../models/users_db");


const saludo = (req, res) => {
    const name = req.query.user;
    (name && leerAdmin.includes(name.toLowerCase()))
        ? res.send(`Hola ${name.replace(name[0], name[0].toUpperCase())}`)
        : res.send('Tu no tienes poder aquí');
}


module.exports = saludo;