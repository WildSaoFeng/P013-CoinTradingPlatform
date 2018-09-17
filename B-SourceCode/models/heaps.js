const Heap = require('heap');
const HistoryOrder = require('./historyOrder');
const PendingOrder = require('./pendingOrder');
const Price5s = require('./priceInFiveSec');
const User = require('./user');
const Math = require('mathjs');
const fileLog = require('../utils/log');

const rates = 1;

function smallHeapCMP(a, b) {
    let ret = 0;
    if(a.price < b.price)
        ret = 1;
    else if(a.price > b.price)
        ret = -1;
    return ret;
}

function largeHeapCMP(a, b) {
    let ret = 0;
    if(a.price < b.price)
        ret = 1;
    else if(a.price > b.price)
        ret = -1;
    return -ret;
}

const SellHeap = new Heap(smallHeapCMP);

const BuyHeap = new Heap(largeHeapCMP);

module.exports.loadPendingOrders = function () {
    const allPendingOrders = PendingOrder.getAllPendingOrders(() => {
       fileLog('load pending orders successfully.');
    });
    for(let thisOrder in allPendingOrders) {
        if(thisOrder.isBuying) {
            BuyHeap.push(thisOrder);
        } else {
            SellHeap.push(thisOrder);
        }
    }

};

function successfulDeal(sell, buy, quant) {
    const dealPrice = (sell.price + buy.price) / 2;

    User.addBalanceA(buy.owner, buy.price * quant);
    User.addBalanceB(sell.owner, quant);

    User.addBalanceA(buy.owner, - dealPrice * quant);
    User.addBalanceB(sell.owner,  - quant);

    User.addBalanceA(sell.owner, rates * dealPrice * quant);
    User.addBalanceB(buy.owner, quant);

    PendingOrder.deletePendingOrderByOrder(sell);
    PendingOrder.deletePendingOrderByOrder(buy);

    let newHistorySellOrder = new HistoryOrder({
        owner: sell.owner,
        price: dealPrice,
        quant: quant,
        isBuying: false,
    });
    HistoryOrder.addNewHistoryOrder(newHistorySellOrder);

    let newHistoryBuyOrder = new HistoryOrder({
        owner: buy.owner,
        price: dealPrice,
        quant: quant,
        isBuying: true,
    });
    HistoryOrder.addNewHistoryOrder(newHistoryBuyOrder);

    Price5s.updateCurrentTime(dealPrice, quant);
}

function adjustCurrentHeaps () {

    let minSellOrder = SellHeap.pop();
    if(!minSellOrder) return ;

    let maxBuyOrder = BuyHeap.pop();
    if(!maxBuyOrder) return ;

    while (minSellOrder.price <= maxBuyOrder.price) {

        let minQuant = Math.min(minSellOrder.quant, maxBuyOrder.quant);

        successfulDeal(minSellOrder, maxBuyOrder, minQuant);

        if(minSellOrder.quant - minQuant) {
            let newPendingOrder = new PendingOrder({
                owner: minSellOrder.time,
                price: minSellOrder.price,
                quant: minSellOrder.quant - minQuant,
                isBuying: minSellOrder.isBuying
            });
            SellHeap.push(thisOrder);
            PendingOrder.addNewPendingOrder(newPendingOrder);
        }

        if(maxBuyOrder.quant - minQuant) {
            let newPendingOrder = new PendingOrder({
                owner: maxBuyOrder.time,
                price: maxBuyOrder.price,
                quant: maxBuyOrder.quant - minQuant,
                isBuying: maxBuyOrder.isBuying
            });
            BuyHeap.addNewPendingOrder(newPendingOrder);
        }

        minSellOrder = SellHeap.pop();
        if(!minSellOrder) return ;

        maxBuyOrder = BuyHeap.pop();
        if(!maxBuyOrder) return ;

    }

    console.log('Adjust Complete!');

};

module.exports.addNewOrder = function(newOrder, callback){
    if(newOrder.isBuying)
        BuyHeap.push(newOrder);
    else
        SellHeap.push(newOrder);
    adjustCurrentHeaps();
    PendingOrder.addNewPendingOrder(newOrder, callback);
};

module.exports.update = function () {
    adjustCurrentHeaps();
};