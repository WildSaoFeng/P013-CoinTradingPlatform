const mongoose = require('mongoose');
const config = require('../config/database');

const PendingOrderSchema = mongoose.Schema({
    owner: Number,
    price: Number,
    quant: Number,
    isBuying: Boolean,
});

const PendingOrder = module.exports = mongoose.model('PendOrders', PendingOrderSchema);

module.exports.getPendingOrderById = function (id, callback) {
    PendingOrder.findById(id, callback);
};

module.exports.getAllPendingOrders = function (callback) {
    PendingOrder.find({}, callback);
};

module.exports.getPendingOrderByUser = function (user, callback) {
    PendingOrder.find({ owner: user }, callback);
};