const Heap = require('Heap');

function smallHeapCMP(a , b) {
    return a.price - b.price;
}

function largeHeapCMP(a, b) {
    return b.price - a.price;
}

const SellHeap = module.exports = new Heap(smallHeapCMP());

const BuyHeap = module.exports = new Heap(largeHeapCMP());