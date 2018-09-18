const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const moment = require('moment');

// const Price5s= require('models/priceInFiveSec');
const Heap = require('./models/heaps');

const config = require('./config/database');
const fileLog = require('./utils/log');
const PORT = process.env.port || 8000;

// Begin App

const app = express();
app.use(bodyParser.json());

const Users = require('./routers/users');
const Loads = require('./routers/load');
const Deals = require('./routers/deals');

function setupDB() {
    mongoose.connect(config.database);

    mongoose.connection.on('connected', () => {
        fileLog('Trader Connected to MongoDB successfully');
    });

    mongoose.connection.on('error', (err) => {
        fileLog('Database error' + err);
    });
}

function setupTime() {
    moment.locale('zh-cn');
}

function startMarket() {

    Heap.loadPendingOrders();
    fileLog('Market has started');
}

function startWebServer() {

    // Use 'users' 'load' 'deals' Three Router Middleware
    app.use('/users', Users);
    app.use('/load' , Loads);
    app.use('/deals', Deals);

    // Start Web Server Listening
    app.listen(PORT, () => {
        fileLog('Server Started on Port ' + PORT);
    });
}

(function main() {
    setupDB();
    setupTime();
    startMarket();
    startWebServer();
})();

module.exports = app;