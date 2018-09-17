const { SelllHeap, BuyHeap } = require('../data_structure/heap');
const HistoryOrder = require('./historyOrder');
const PendingOrder = require('./pendingOrder');
const Price5s = require('./priceInFiveSec');
const Math = require('Math');

module.exports.loadPendingOrders = function () {
    const allPendingOrders = PendingOrder.getAllPendingOrders(() => {
       console.log('load pending orders successfully.');
    });
    for(eachOrder in allPendingOrders) {
        const thisOrder = eachOrder;
        if(eachOrder.isBuying) {
            BuyHeap.push(thisOrder);
        } else {
            SelllHeap.push(thisOrder);
        }
    }

};

module.exports.addNewOrder = function () {

};

module.exports.deleteOrder = function() {

};

function successfulDeal() {

}

module.exports.adjustCurrentHeaps = function() {

    let minSellOrder = SelllHeap.pop();
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
            SelllHeap.addNewOrder(newPendingOrder);
        }

        if(maxBuyOrder.quant - minQuant) {
            let newPendingOrder = new PendingOrder({
                owner: maxBuyOrder.time,
                price: maxBuyOrder.price,
                quant: maxBuyOrder.quant - minQuant,
                isBuying: maxBuyOrder.isBuying
            });
            BuyHeap.addNewOrder(newPendingOrder);
        }

        minSellOrder = SelllHeap.pop();
        if(!minSellOrder) return ;

        maxBuyOrder = BuyHeap.pop();
        if(!maxBuyOrder) return ;

    }

    console.log('Adjust Complete!');

};

