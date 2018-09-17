const express = require('express');
const router = express.Router();
const passport = require('passport');
const Heap = require('../models/heaps');
const PendingOrder = require('../models/pendingOrder');
const User = require('../models/user');
const fileLog = require('../utils/log');

router.post('/buy', (req, res, next) => {

    let newOrder = new PendingOrder({
        owner: req.body.owner,
        price: req.body.price,
        quant: req.body.quant,
        isBuying: true,
    });

    User.addBalanceA(req.body.owner, -req.body.quant * req.body.price, (err, success) => {
        // if(err){
        //     fileLog(err);
        // } else{
        //     fileLog(success);
        // }
    });

    Heap.addNewOrder(newOrder, (err, success) => {
        User.pushIntoPending(req.body.owner, success._id);
        if(err){
            res.json({success:false,msg:'Failed to buy!' + err});
        } else{
            res.json({success:true,msg:'Successfully buy!'});
        }
    });
});

router.post('/sell', (req, res, next) => {

    let newOrder = new PendingOrder({
        owner: req.body.owner,
        price: req.body.price,
        quant: req.body.quant,
        isBuying: false,
    });

    User.addBalanceB(req.body.owner, -req.body.quant , (err, success) => {});

    Heap.addNewOrder(newOrder, (err, success) => {
        User.pushIntoPending(req.body.owner, success._id);
        if(err){
            res.json({success:false,msg:'Failed to sell!' + err});
        } else{
            res.json({success:true,msg:'Successfully sell!'});
        }
    });
});

router.post('/update', (req, res, next) => {
    Heap.update();
    res.send('Update Successfully! :o');
});

module.exports = router;
