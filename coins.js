const den = {  //Denomination
  qs: 0.25,
  ds: 0.1,
  ns: 0.05,
  ps: 0.01
};

function round(x, r) {
  return Number(x.toFixed(r))
}

function coinsToAmount(coins) {
  let keys = Object.keys(coins);
  return keys.reduce((sum,key)=>(sum + (coins[key] * den[key])), 0);
}

/*
function coinsToAmount(coins) {
  let keys = Object.keys(coins);
  let sum = 0;
  keys.forEach((key)=>(sum += coins[key] * den[key]));
  return sum;
}
*/

function amountToCoins(amount, coins) {
  let sum = 0;
  let factor = 0;
  let currKey = 0;
  let availableCoins = 0;
  let reqNumOfCoins = 0;
  let resOb = {};
  let keys = Object.keys(coins);
  for(let i = 0; sum <= amount && i < keys.length; ++i) {
    currKey = keys[i];
    factor = den[currKey];
    availableCoins = coins[currKey];
    reqNumOfCoins = Math.floor((amount - sum) / factor);
    if(reqNumOfCoins < 1) continue;
    if(reqNumOfCoins < availableCoins) {
      sum += reqNumOfCoins * factor;
      resOb[currKey] = reqNumOfCoins;
    } else {
      sum += availableCoins * factor;
      resOb[currKey] = availableCoins;
    }
  }
  if(sum != amount) return [sum, round((amount - sum), 2)];
  return [resOb, sum];
}

console.log(coinsToAmount({qs: 4, ns: 5, ps: 10, ds: 20}));         //3.35
console.log(amountToCoins(2, {qs: 7}));                             //[ 1.75, 0.25 ]
console.log(amountToCoins(5.23, {qs: 20, ds: 5, ns: 10, ps: 20}));  //[ { qs: 20, ds: 2, ps: 3 }, 5.23 ]
console.log(amountToCoins(7, {qs: 20, ds: 5, ns: 10, ps: 20}));     //[ 6.2, 0.8 ]
