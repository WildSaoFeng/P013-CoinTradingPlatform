const moment = require('moment');
const timeFormat = String("YYYY MMMMDo HH:mm:ss");

function fileLog(str) {
    console.log('['+ moment().format(timeFormat)  + '] ' + str);
}

function specLog(str) {
    console.log('****************************');
    console.log('['+ moment().format(timeFormat)  + '] ' + str);
    console.log('****************************');
}

module.exports = fileLog;


