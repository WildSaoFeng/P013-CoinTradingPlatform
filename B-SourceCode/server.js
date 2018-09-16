const express = require('express');
const mongoose = require('mongoose');

const moment = require('moment');
const sleep = require('sleep');
const config = require('./config/database');

const app = express();

const PORT = process.env.port || 8000;
var today;

function setupDB() {
    mongoose.connect(config.database);

    mongoose.connection.on('connected', () => {
        console.log('Trader Connected to MongoDB successfully');
    });
}

function setupTime() {
    moment.locale('zh-cn');
}

function startWebServer() {
    app.get('/test', (req, res) => {
        res.send("WildSaoFeng");
    });

    app.listen(PORT, () => {
        console.log('Server started on the port ' + PORT);
    });
}

function startMarket() {
    setTimeout(
        () => {
            console.log(moment().format('YYYY MMMM Do - h:mm:ss a'));
        }
        ,50000000);

}

function main() {
    setupDB();
    setupTime();
    startWebServer();
    startMarket();
}


main();
