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
/*
function amountToCoins(amount, coins) {
  let sum = 0;
  let countDen = 0;
  let resOb = {};
  let keys = Object.keys(coins);
  for(let i = 0; sum < amount && i < keys.length; ++i) {
    // console.log('i = ' + i + ' amount - sum = ' + (amount - sum));
    countDen = (amount - sum) / den[keys[i]];
    countDen = countDen < 1 ? 0 : round(countDen, 0);
    // console.log('i = ' + i + ' countDen = ' + countDen + ' den[keys[i]] = '+den[keys[i]]);
    if(countDen < coins[keys[i]]) {
      sum += countDen * den[keys[i]];
      resOb[keys[i]] = countDen;
    } else {
      sum += coins[keys[i]] * den[keys[i]];
      resOb[keys[i]] = coins[keys[i]];
    }
  }
  if(sum != amount) return [sum, round((amount - sum), 2)];
  // return new Array(resOb, sum);
  return [resOb, sum];
}
*/

console.log(coinsToAmount({qs: 4, ns: 5, ps: 10, ds: 20}));
console.log(amountToCoins(2, {qs: 7}));
console.log(amountToCoins(5.23, {qs: 20, ds: 5, ns: 10, ps: 20}));
console.log(amountToCoins(7, {qs: 20, ds: 5, ns: 10, ps: 20}));
