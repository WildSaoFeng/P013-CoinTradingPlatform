const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    historyOrders: [Number],
    pendingOrders: [Number],
    balanceA: Number,
    balanceB: Number,
    balanceC: Number

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
};

module.exports.userAddBalanceA = function (id, delta) {
    User.findByIdAndUpdate(id, { $set: {
            balanceA: balanceA + delta
        }});
};

module.exports.userAddBalanceB = function (id, delta) {
    User.findByIdAndUpdate(id, { $set: {
            balanceA: balanceB + delta
        }});
};

module.exports.userAddBalanceC = function (id, delta) {
    User.findByIdAndUpdate(id, { $set: {
            balanceA: balanceC + delta
        }});
};