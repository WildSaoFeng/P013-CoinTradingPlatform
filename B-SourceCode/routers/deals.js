const express = require('express');
const router = express.Router();
const passport = require('passport');
const Heap = require('../models/heaps');
const PendingOrder = require('../models/pendingOrder');

router.post('/buy', (req, res, next) => {
    let newOrder = new PendingOrder({
        owner: req.body.owner,
        price: req.body.price,
        quant: req.body.quant,
        isBuying: true,
    });
    Heap.addNewOrder(newOrder);
    Heap.adjustCurrentHeaps();
    res.send('Buy Successfully! :) ');
});

router.post('/sell', (req, res, next) => {
    let newOrder = new PendingOrder({
        owner: req.body.owner,
        price: req.body.price,
        quant: req.body.quant,
        isBuying: false,
    });
    Heap.addNewOrder(newOrder);
    Heap.adjustCurrentHeaps();
    res.send('Sell Successfully! :D');
});

router.post('/update', (req, res, next) => {
    Heap.adjustCurrentHeaps();
    res.send('Update Successfully! :o');
});

module.exports = router;
