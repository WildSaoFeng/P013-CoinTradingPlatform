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
    historyOrders: [String],
    pendingOrders: [String],
    balanceA: Number,
    balanceB: Number,
    balanceC: Number,

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    User.findOne({ username: username}, callback);
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

module.exports.addBalanceAbyId = function (id, delta, callback) {
    User.findByIdAndUpdate(id, { $inc: {
            "balanceA": delta
        }}, callback);
};

module.exports.addBalanceBbyId = function (id, delta, callback) {
    User.findByIdAndUpdate(id, { $inc: {
            "balanceB": delta
        }}, callback);
};

module.exports.addBalanceCbyId = function (id, delta, callback) {
    User.findByIdAndUpdate(id, { $inc: {
            "balanceC": delta
        }}, callback);
};

module.exports.addBalanceA = function (username, delta, callback) {
    User.getUserByUsername(username, (err, usr) => {
        User.findByIdAndUpdate(usr._id, { $inc: {
                "balanceA": delta
            }}, callback);
    });
};

module.exports.addBalanceB = function (username, delta, callback) {
    User.getUserByUsername(username, (err, usr) => {
        User.findByIdAndUpdate(usr._id, { $inc: {
                "balanceB": delta
            }}, callback);
    });
};

module.exports.addBalanceC = function (username, delta, callback) {
    User.getUserByUsername(username, (err, usr) => {
        User.findByIdAndUpdate(usr._id, { $inc: {
                "balanceC": delta
            }}, callback);
    });
};


// 我都不知道这里我是怎么卡住又是怎么解决的总之这次对了
// 现在我知道了，必须要加上回调函数，不然加不成功
module.exports.pushIntoPending = function (id, orderId) {
    // console.log("****" + typeof orderId.toString());
    orderId = orderId.toString();
    // console.log(id +'*' + orderId);
    User.findByIdAndUpdate(id, { $push: {
        pendingOrders: orderId
    }}, {
        upsert: true
    }, (err, suc) => {});
};

module.exports.pullFromPending = function (id, orderId) {
    // console.log("****" + typeof orderId.toString());
    orderId = orderId.toString();
    // console.log(id +'*' + orderId);
    User.findByIdAndUpdate(id, { $pull: {
            pendingOrders: orderId
        }}, {
    }, (err, suc) => {});
};

module.exports.pushIntoHistory = function (id, orderId) {
    // console.log("****" + typeof orderId.toString());
    orderId = orderId.toString();
    // console.log(id +'*' + orderId);
    User.findByIdAndUpdate(id, { $push: {
            historyOrders: orderId
        }}, {
        upsert: true
    }, (err, suc) => {});
};

module.exports.popFromPending = function (id, orderId) {
    User.findByIdAndUpdate(id, { $pop: {pendingOrders: orderId}} );
};