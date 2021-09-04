const path = require('path'),
      fs = require('fs'),
      createLog = require('./logger'),
      pathPelis = path.join(__dirname, '..', 'data', 'pelis.json')

const leer = JSON.parse(fs.readFileSync(pathPelis, 'utf-8'));
const escribir = obj => fs.writeFileSync(pathPelis, JSON.stringify(obj, null, 4), 'utf-8');

const actualizar = obj => {
    let pelis = leer.filter(pl => pl.id !== obj.id);
    pelis.push(obj);
    escribir(pelis);
    createLog(`Se visito ${obj.path} (total: ${obj.conteo})\n`)
}


module.exports = {
    leer,
    actualizar,
}