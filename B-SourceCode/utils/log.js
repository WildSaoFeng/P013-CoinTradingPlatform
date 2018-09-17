const moment = require('moment');
const timeFormat = String("YYYY MMMMDo HH:mm:ss");

function fileLog(str) {
    console.log('['+ moment().format(timeFormat)  + '] ' + str);
}

module.exports = fileLog;