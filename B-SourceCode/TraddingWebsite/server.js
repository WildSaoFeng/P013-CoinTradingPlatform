const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const moment = require('moment');
const cookieParser = require('cookie-parser');

// const Price5s= require('models/priceInFiveSec');
const Heap = require('./models/heaps');

const config = require('./config/database');
const fileLog = require('./utils/log');
const PORT = process.env.port || 8000;

// Begin App

const app = express();
app.use(express.static(path.join(__dirname, "./build")));

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cookieParser());

app.use(session({
    secret: 'saofeng',
    saveUninitialized: true,
    resave: true
}));

const Users = require('./routers/users');
const Loads = require('./routers/load');
const Deals = require('./routers/deals');
const SSO = require('./routers/sso');

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
    app.use('/ssoback', SSO);

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