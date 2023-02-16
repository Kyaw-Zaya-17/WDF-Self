// const fruits = {
//     grape : 200,
//     banana : 400,
//     apple : 500,
//     pineapple : 700
// }

// let total = 0;

// function tax (amount, taxRate=5){
//     return amount*(taxRate/100)
// }

// function buy (fruitName,quantity) {
//     let cost = quantity * fruits[fruitName];
//     total += cost;

//     // return  cost + " MMK";
//     // return fruitName + " : " + quantity +" : " + cost + " MMK"
//     return `${fruitName} : ${quantity}: ${cost} mmk`
//     // let actualCost = cost + tax(cost);
//     // return actualCost + " MMK";
// }

// console.log(buy("banana", 5));
// console.log(buy("apple", 5));
// console.log(buy("pineapple", 5));

// // console.log(tax(500) + " MMK");
// console.log("Total is "+ total + " MMK")
// console.log("Tax is " + tax(total)+ " MMK")
// console.log("NetTotal is " + (total +tax(total))+ " MMK")



const fruits = {

    grape : 200,
    banana : 300,
    lemon : 500
}

let total = 0;

// function tax (amount, taxRate = 5) {
//     return amount * (taxRate/100) + " MMK";
// }


// function buy (fruitName, quantity) {

//     let cost = quantity * fruits[fruitName];
//     total += cost;
//     return fruitName + " : "+ quantity + " = " + cost + " MMK"
// }

// console.log(buy("banana", 5))
// console.log(buy("lemon", 5))
// console.log(buy("grape", 5))

// console.log("Total is ", total);
// console.log("Tax is " , tax(total));
// console.log("Total net is",total+ tax(total) )
// console.log(total + " MMK")

// console.log(tax(500));


function tax (amount, taxRate=5) {

    return amount * (taxRate/100);
}

function buy(fruitName, quantity){

    let cost = quantity* fruits[fruitName];
    total += cost;
    return `${fruitName}:${quantity} = ${cost}`
}

console.log(buy("banana", 5))
console.log(buy("lemon", 5))
console.log(buy("banana", 5))

console.log("Total is", total, " MMK")
console.log("Tax is", tax(total), " MMk")
console.log("Total net is ", total + tax(total), " MMK")

console.log(tax(500))