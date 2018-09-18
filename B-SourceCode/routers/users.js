const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');

router.post('/authenticate/pswd', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User no found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                // Bug Fixed 1 : user.toJSON() from user, because plain text is needed
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    // Bug Fixed 3 : 'bearer ' from 'JWT ', later is legacy and 4.0 version updated
                    token: 'bearer ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,

                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        balanceA: 0,
        balanceB: 0,
        balanceC: 0,
    });
    // console.log(newUser);

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false,msg:'Failed to register user'});
        } else{
            res.json({success:true,msg:'User registered'});
        }
    });
});

router.post('/add/a', (req, res, next) => {
    let delta = req.body.delta;
    let id = req.body.id;

    User.addBalanceA(id, delta, (err, success) => {
        if(err){
            res.json({success:false,msg:'Failed to add user\'s balance A'});
        } else{
            res.json({success:true,msg:'Successfully add user\'s balance A'});
        }
    });
});

router.post('/add/b', (req, res, next) => {
    let delta = req.body.delta;
    let id = req.body.id;

    User.addBalanceB(id, delta, (err, success) => {
        if(err){
            res.json({success:false,msg:'Failed to add user\'s balance B'});
        } else{
            res.json({success:true,msg:'Successfully add user\'s balance B'});
        }
    });
});

router.post('/add/c', (req, res, next) => {
    let delta = req.body.delta;
    let id = req.body.id;

    User.addBalanceC(id, delta, (err, success) => {
        if(err){
            res.json({success:false,msg:'Failed to add user\'s balance C'});
        } else{
            res.json({success:true,msg:'Successfully add user\'s balance C'});
        }
    });
});

router.post('/add/byname/a', (req, res, next) => {
    let delta = req.body.delta;
    let username = req.body.username;

    User.addBalanceA(username, delta, (err, success) => {
        if(err){
            res.json({success:false,msg:'Failed to add user\'s balance A'});
        } else{
            res.json({success:true,msg:'Successfully add user\'s balance A'});
        }
    });
});


module.exports = router;


