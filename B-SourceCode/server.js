const express = require('express');
const mongoose = require('mongoose');

const moment = require('moment');
// const { SmallHeap, LargeHeap } = require('./data_structure/heap');
const config = require('./config/database');

const app = express();

const PORT = process.env.port || 8000;
const timeFormat = String("YYYY MMMMDo HH:mm:ss");

function setupDB() {
    mongoose.connect(config.database);

    mongoose.connection.on('connected', () => {
        console.log('['+ moment().format(timeFormat)  + '] '+ 'Trader Connected to MongoDB successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log('['+ moment().format(timeFormat)  + '] '+ 'Database error'+err);
    });
}

function setupTime() {
    moment.locale('zh-cn');
}



function startMarket() {
    // updatePriceSinceClose
    // loadPendingOrders
    console.log('['+ moment().format(timeFormat)  + '] ' + 'Market has started');
}

function startWebServer() {
    app.get('/test', (req, res) => {
        res.send("WildSaoFeng");
    });

    // Use Some Routes;

    app.listen(PORT, () => {
        console.log('['+ moment().format(timeFormat)  + '] '+ 'Server started on the port ' + PORT);
    });
}

(function main() {
    setupDB();
    setupTime();
    startMarket();
    startWebServer();
})();
