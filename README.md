Mini Project (coins)
1. Write a function coinsToAmount to convert coins (USA) to USD amount:
```
function coinsToAmount(coins) {
  ???
}

console.log(coinsToAmount({qs: 4}))) // 1
console.log(coinsToAmount({ds: 2}))) // 0.2
// Coins :: {qs :: number, ds :: number, ns :: number, ps :: number}
```
2. Time to write the opposite function. There are many cases when such conversions are required: exchange machines, cash machines (ATMs), etc. They all take a number (e.g. withdraw amount) and convert it to some multi-unit representation (different numbers of different bank notes).
In this particular project you need to develop an algoritm to convert money amount to coins.
Write a function `amountToCoins` to convert money amount to coins. The function takes a number `amount` and
an object `coins` and returns a tuple of object and number by the following rules.
Dispense larger denominations first. In general (now always) it would also
result in the smallest number of coins being used. The algorithm shouldn't be tied
to the particular demoninations of the coins, though it may be a good idea to start from that.
The algorithm should consider the available coins (the second argument). In case it's impossible
to gather the required amount with available coins, the algorithm should return a sum that is possible
to get (the first result) and the difference between required and available amounts (the second result),
leaving the final decision to the client code.
For example, for a coin exchange machine, it may tell the human that the difference between X and Y
is small and human may decide to overpay but get the desired coins.
```
let rates = {Q: 0.25, D: 0.1, N: 0.05, P: 0.01}

function round(x) {
  return Number(x.toFixed(2))
}

function coinsToAmount(coins) {
  ???
}

function amountToCoins(amount, coins) {
  ???
}
```
