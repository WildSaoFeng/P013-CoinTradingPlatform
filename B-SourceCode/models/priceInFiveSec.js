const mongoose = require('mongoose');
const config = require('../config/database');
const moment = require('moment');

const DEFAULT_PRICE = 100;

const PriceInFiveSchema = mongoose.Schema({
    time: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number
});

const Price5s = module.exports = mongoose.model('Price5s', PriceInFiveSchema);

function compare(a, b) {
    return a.time > b.time;
}

module.exports.getPriceById = function (id, callback) {
    Price5s.findById(id, callback);
};

module.exports.getAllPrice = function (callback) {
    Price5s.find({}, callback);
};

module.exports.addNewPrice = function(newPrice ,callback) {
    newPrice.save(callback);
};

module.exports.updateToCurrentTime = function () {

    let allPrices = Price5s.getAllPrice();
    allPrices.sort(compare);

    const curTime = moment();
    let lstTime, price;

    if(!allPrices[0]) {
        lstTime = moment();
        price = DEFAULT_PRICE;
    } else {
        lstTime = allPrices[0].time;
        price = allPrices[0].open;
    }

    while(lstTime.add(5, 'seconds') <= curTime) {
        let newPrice = new Price5s({
            time: lstTime,
            open: price,
            high: price,
            low: price,
            close: price,
            volume: 0
        });
        addNewPrice(newPrice, () => {
            console.log('add new price!');
        });
        lstTime = lstTime.add(5, 'seconds');
    }
};

module.exports.updateCurrentTime = function(){


};

module.exports.newDealInThisFiveSeconds = function () {

};