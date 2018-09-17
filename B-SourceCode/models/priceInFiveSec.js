const mongoose = require('mongoose');
const config = require('../config/database');
const moment = require('moment');

const DEFAULT_PRICE = 100;
let globalLast, glbOpen, glbHigh, glbLow, glbClose, glbVol = 0;

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

function getClosest5s(a) {
    const delta = a.second() - a.second() / 5 * 5;
    return a.add(-delta, 'second');
}

module.exports.getPriceById = function (id, callback) {
    Price5s.findById(id, callback);
};

module.exports.getPriceByTime = function (time, callback) {
    Price5s.findOne({ time: time }, callback);
};

module.exports.getAllPrice = function (callback) {
    Price5s.find({}, callback);
};

module.exports.addNewPrice = function(newPrice ,callback) {
    newPrice.save(callback);
};

function updateToCurrentTime() {

    Price5s.getAllPrice((err, allPrice) => {

        allPrices.sort(compare);

        const curTime = moment();
        let lstTime, price;

        if(!allPrices[0]) {
            lstTime = moment();
            lstTime = getClosest5s(lstTime);
            globalLast = lstTime;
            price = DEFAULT_PRICE;
        } else {
            lstTime = allPrices[0].time;
            price = allPrices[0].open;
        }

        while(lstTime.add(5, 'seconds') <= curTime) {
            globalLast = lstTime;
            Price5s.getPriceByTime(lstTime, (err, foundPrice) => {
                if(foundPrice)
                    return ;
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
            });
            lstTime = lstTime.add(5, 'seconds');
        }
    });
}

function calculateLastTime() {
    if(glbVol == 0)return ;
    let newPrice = new Price5s({
        time: globalLast,
        open: glbOpen,
        high: glbHigh,
        low: glbLow,
        close: glbClose,
        volume: glbVol
    });
    addNewPrice(newPrice, () => {
        console.log('add new price!');
    });
    globalLast.add(5, 'second');
}

module.exports.updateCurrentTime = function(dealPrice, quant){
    const curTime =moment();
    if(globalLast.add(5, 'seconds') <= curTime) {
        glbOpen = 0? dealPrice : glbOpen;
        glbHigh = Math.max(glbHigh, dealPrice);
        glbLow = Math.min(glbLow, dealPrice);
        glbClose = dealPrice;
        glbVol += quant;
        return ;
    }
    calculateLastTime();
    updateToCurrentTime();

    glbOpen = 0;
    glbHigh = -1;
    glbLow = 0x7fffffff/2;
    glbClose = 0;
    glbVol = 0;

};
