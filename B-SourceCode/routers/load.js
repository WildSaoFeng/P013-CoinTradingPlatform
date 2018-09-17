const express = require('express');
const router = express.Router();
const passport = require('passport');

const Price5s = require('../models/priceInFiveSec');
const User = require('../models/user');
const PendingOrder = require('../models/pendingOrder');
const HistoryOrder = require('../models/historyOrder');

router.get('/test', (req, res, next) => {
    res.send('Get info !');
});

router.get('/info', (req, res, next) => {
    let allPrice = Price5s.getAllPrice();
    res.send(allPrice);
});

router.get('/user/profile', (req, res, next) => {
    User.getUserById(req.id, (err, user) => {
        res.send(user);
    });
});

router.get('/user/pending', (req, res, next) => {
    PendingOrder.getAllPendingOrders(req.user, (err, orders) => {
        res.send(orders);
    });
});

router.get('/user/history', (req, res, next) => {
    HistoryOrder.getHistoryOrderByUser(req.user, (err, orders) => {
        res.send(orders);
    });
});

module.exports = router;