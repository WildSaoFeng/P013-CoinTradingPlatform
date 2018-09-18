const mongoose = require('mongoose');
const config = require('../config/database');
const User = require('./user');
const specLog = require('../utils/log2');

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

module.exports.addNewPendingOrder = async function (newOrder) {
    // specLog(newOrder);
    await newOrder.save((err, suc) => { console.log('-SAVE-'); if(err) console.log(err);specLog(suc);});
    User.pushIntoPending(newOrder.owner, newOrder._id);
};

module.exports.deletePendingOrderByOrder = async function (id, owner) {
    // specLog(id);
    await PendingOrder.findOneAndDelete(id, (err, suc) => {console.log('-DELETE- '+id);});
    User.pullFromPending(owner, id);

};