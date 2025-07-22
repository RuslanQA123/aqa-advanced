function checkOrder(available, ordered) {
    if (available < ordered) {
        return console.log(`Your order is too large, we don’t have enough goods.`);
    }
    else if (ordered === 0) {
        return console.log(`Your order is empty`);
    }
    else if (available > ordered) {
        return console.log(`Your order is accepted`);
    }
}

checkOrder(0, 2)