//mmk to usd / 1 usd = 2100MMK


const rates = {

    usd : 2100,
    sgd : 1470,
    eur : 2108
}

// function usdToMMK (input){

//     return (input* rates.usd) + " MMK";
// }

// console.log(usdToMMK(500))

// function ToMMK (inputAmount, fromCurrency) {
   
//     return (inputAmount* rates[fromCurrency]) + " MMK";

// }

// console.log(ToMMK(500, "usd"))
// console.log(ToMMK(500, "sgd"))
// console.log(ToMMK(500, "eur"))

// console.log("-----------------------------")

// function toCurrency (InputMMK, Currency) {
//     return (InputMMK/rates[Currency])+ Currency;
// }

// console.log(toCurrency(500000, "usd"))
// console.log(toCurrency(50000, "sgd"))
// console.log(toCurrency(5000, "eur"))

//from any currency to any currency
// sgd to usd

function toAnyCurrency (inputAmount,fromCurrency,toCurrency){
    let mmk = inputAmount* rates[fromCurrency];
    let result = mmk/rates[toCurrency];

    return result + toCurrency;
}

console.log(toAnyCurrency(5000,"sgd","usd"));
console.log(toAnyCurrency(5000,"sgd","sgd"));