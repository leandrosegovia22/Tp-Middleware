const path = require('path'),
    fs = require('fs'),
    pathLog = path.join(__dirname, '..', 'logs', 'userLogs.txt');

const createLog = log => fs.appendFileSync(pathLog, log, 'utf-8');


module.exports = createLog;