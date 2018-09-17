const mongoose = require('mongoose');
const config = require('../config/database');

const PendingOrderSchema = mongoose.Schema({
    owner: String,
    price: Number,
    quant: Number,
    isBuying: Boolean,
});

const PendingOrder = module.exports = mongoose.model('pend', PendingOrderSchema);

module.exports.getPendingOrderById = function (id, callback) {
    PendingOrder.findById(id, callback);
};

module.exports.getAllPendingOrders = function (callback) {
    PendingOrder.find({}, callback);
};

module.exports.getPendingOrderByUser = function (user, callback) {
    PendingOrder.find({ owner: user }, callback);
};

module.exports.addNewPendingOrder = function (newOrder, callback) {
    newOrder.save(callback);
};

module.exports.deletePendingOrderByOrder = function (oldOrder) {
    PendingOrder.findOneAndDelete(oldOrder);
};