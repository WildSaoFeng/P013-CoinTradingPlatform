const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('./user');

const HistoryOrderSchema = mongoose.Schema({
    owner: String,
    price: Number,
    quant: Number,
    isBuying: Boolean,
});

const HistoryOrder = module.exports = mongoose.model('HisOrders', HistoryOrderSchema);

module.exports.getHistoryOrderById = function (id, callback) {
    HistoryOrder.findById(id, callback);
};

module.exports.getHistoryOrderByUser = function (user, callback) {
    HistoryOrder.find({ owner: user }, callback);
};

module.exports.addNewHistoryOrder = function (newOrder) {
    newOrder.save();
    User.pushIntoHistory(newOrder.owner, newOrder._id);
};

