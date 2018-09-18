const Heap = require('heap');
const HistoryOrder = require('./historyOrder');
const PendingOrder = require('./pendingOrder');
const Price5s = require('./priceInFiveSec');
const User = require('./user');
const Math = require('mathjs');
const fileLog = require('../utils/log');
const specLog = require('../utils/log2');
const async = require('async');

const rates = 1;

function smallHeapCMP(a, b) {
    let ret = 0;
    if(a.price < b.price)
        ret = 1;
    else if(a.price > b.price)
        ret = -1;
    return -ret;
}

function largeHeapCMP(a, b) {
    let ret = 0;
    if(a.price < b.price)
        ret = 1;
    else if(a.price > b.price)
        ret = -1;
    return ret;
}

let SellHeap = new Heap(smallHeapCMP);

let BuyHeap = new Heap(largeHeapCMP);

module.exports.loadPendingOrders = function () {
    PendingOrder.getAllPendingOrders((err, allPendingOrders) => {
       fileLog('load pending orders successfully.');
       // console.log(allPendingOrders);
       // OMG ... for-in loop return index!
       for(let thisIndex in allPendingOrders) {
           let thisOrder = allPendingOrders[thisIndex];
           if(thisOrder.isBuying) {
                BuyHeap.push(thisOrder);
           } else {
                SellHeap.push(thisOrder);
           }
           // console.log(thisOrder);
       }
       // console.log(SellHeap);
    });

};

module.exports.showTwoHeaps = function() {
    specLog(SellHeap);
    console.log(SellHeap);
    specLog(BuyHeap);
    console.log(BuyHeap);
};

async function adjustCurrentHeaps () {

    let minSellOrder = SellHeap.pop();
    if(!minSellOrder) return ;

    let maxBuyOrder = BuyHeap.pop();
    if(!maxBuyOrder) {
        SellHeap.push(minSellOrder);
        return ;
    }

    // specLog(minSellOrder);

    // specLog(maxBuyOrder);


    while (minSellOrder.price <= maxBuyOrder.price) {

        let minQuant = Math.min(minSellOrder.quant, maxBuyOrder.quant);

        const dealPrice = (minSellOrder.price + maxBuyOrder.price) / 2;

        // Give Back Pre-order A/B
        await User.addBalanceAbyId(maxBuyOrder.owner, maxBuyOrder.price * maxBuyOrder.quant, (err, suc) => {});
        await User.addBalanceBbyId(minSellOrder.owner, minSellOrder.quant, (err, suc) => {});

        // Cost
        await User.addBalanceAbyId(maxBuyOrder.owner, - dealPrice * minQuant, (err, suc) => {});
        await User.addBalanceBbyId(minSellOrder.owner,  - minQuant, (err, suc) => {});

        // Make Deals
        await User.addBalanceBbyId(maxBuyOrder.owner, minQuant, (err, suc) => {});
        await User.addBalanceAbyId(minSellOrder.owner,rates * dealPrice * minQuant , (err, suc) => {});

        // Adding History Deals
        let newHistorySellOrder = new HistoryOrder({
            owner: minSellOrder.owner,
            price: dealPrice,
            quant: minQuant,
            isBuying: false,
        });
        await HistoryOrder.addNewHistoryOrder(newHistorySellOrder);

        let newHistoryBuyOrder = new HistoryOrder({
            owner: maxBuyOrder.owner,
            price: dealPrice,
            quant: minQuant,
            isBuying: true,
        });
        await HistoryOrder.addNewHistoryOrder(newHistoryBuyOrder);

        // Update Prices
        // await Price5s.updateCurrentTime(dealPrice, minQuant);

        // Making Remain Deals
        if(minSellOrder.quant - minQuant > 0) {
            let newPendingSellOrder = new PendingOrder({
                owner: minSellOrder.owner,
                price: minSellOrder.price,
                quant: minSellOrder.quant - minQuant,
                isBuying: false
            });
            SellHeap.push(newPendingSellOrder);
            await PendingOrder.addNewPendingOrder(newPendingSellOrder);
        }

        if(maxBuyOrder.quant - minQuant > 0) {
            let newPendingBuyOrder = new PendingOrder({
                owner: maxBuyOrder.owner,
                price: maxBuyOrder.price,
                quant: maxBuyOrder.quant - minQuant,
                isBuying: true
            });
            BuyHeap.push(newPendingBuyOrder);
            await PendingOrder.addNewPendingOrder(newPendingBuyOrder);
        }

        // Delete Old Orders
        await PendingOrder.deletePendingOrderByOrder(minSellOrder._id.toString(), minSellOrder.owner);
        await PendingOrder.deletePendingOrderByOrder(maxBuyOrder._id.toString(), maxBuyOrder.owner);

        // Go to next iteration
        minSellOrder = SellHeap.pop();
        if(!minSellOrder) {
            // SellHeap.push(minSellOrder);
            break ;
        }
        maxBuyOrder = BuyHeap.pop();
        if(!maxBuyOrder) {
            BuyHeap.push(minSellOrder);
            break ;
        }

        // specLog(minSellOrder);
        //
        // specLog(maxBuyOrder);

        console.log("A Loop");

    }

    console.log('Adjust Complete!');

}

module.exports.addNewOrder = async function(newOrder, callback){
    if(newOrder.isBuying)
        BuyHeap.push(newOrder);
    else
        SellHeap.push(newOrder);
    // fileLog('Adj');
    // console.log(BuyHeap);
    // console.log(SellHeap);
    await PendingOrder.addNewPendingOrder(newOrder);
    await adjustCurrentHeaps();
    callback();
};

module.exports.update = function () {
    adjustCurrentHeaps();
};