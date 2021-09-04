const path = require('path'),
      fs = require('fs'),
      pathAdmin = path.join(__dirname, '..', 'data', 'admin.json');

const leerAdmin = JSON.parse(fs.readFileSync(pathAdmin, 'utf-8'));

module.exports = leerAdmin;