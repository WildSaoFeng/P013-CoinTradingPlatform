const mongoose = require('mongoose');
const config = require('../config/database');

const HistoryOrderSchema = mongoose.Schema({
    owner: Number,
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

module.exports.addNewHistoryOrder = function (newOrder, callback) {
    newOrder.save(callback);
};

