console.log(amountToCoins(46, [25, 10, 5, 1]));
console.log(amountToCoins(45, [25, 10, 5, 1]));
console.log(amountToCoins(50, [25, 10, 5, 1]));
console.log(amountToCoins(30, [25, 10, 5, 1]));

function amountToCoins(amount, coins){
    var purse = [];
    for(var i = 0; i<coins.length; i++){
        if(amount % coins[i] !== 0 && amount - coins[i] >= 0){
            amount=amount-coins[i]
            purse=[...purse, coins[i]];
            if(amount % coins[i] === 1 && amount>coins[i])
                i--
            continue;
        }else if(amount%coins[i] === 0){
            amount=amount-coins[i]
            purse=[...purse, coins[i]];
            if(amount - coins[i] >= 0)
                i--
            else break;
        }
    }
    return purse;
}