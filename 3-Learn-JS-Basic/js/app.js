//functionမှာမှ parameterနဲ့ argueသုံးတဲ့ functiton
// const myName = "Kyaw Zayar Tun";

// console.log(myName);

// //12 inches = 1 feet

// function inchesToFeet(input){
//     return input/12 + " ft";
// }

// console.log(inchesToFeet(12))
// console.log(inchesToFeet(100))
// console.log(inchesToFeet(24))


//arrayအကြောင်း

// let fruits = ["mango","pineapple","grape"]

// fruits[0]="apple";//arrayတန်ဖိုးပြောင်းရေးတာ


// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);


// let mySelf = [
//     "Kyaw Zayar Tun",
//     22,
//     true,
//     "Developer",
//     ["HTML","CSS","JVS","SQL","C#"],
//     "1 Billion Dollar"

// ]

// console.log(`My name is ${mySelf[0]} and working as a ${mySelf[3]} and specialized in
// ${mySelf[4]} languages, especially ${mySelf[4][3]}.`)

// let arr =[];
// //new elementထည့်ခြင်း

// arr[0]="aa";
// arr[2]="aa";
// arr[8]="money";

// console.log(arr);


// let arr=[];

// arr[arr.length]="aa";
// arr[arr.length]="bb";
// arr[arr.length]="cc";
// arr[arr.length]="dd";
// arr[arr.length]="ee";

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);//နောက်ဆုံးအခန်းထုတ်နည်း

// Object ရေးနည်း
//key:value  | property: value;

// let mySelf = {
//     name : "Kyaw Zayar Tun",
//     age : 22,
//     gf : true,
//     job : "Web Developer",
//     skill: ["HTML","CSS", "JVS"],
//     network: "1 billionare"
// }

// //တန်ဖိုးထုတ်နည်းတစ်မျိုး
// console.log(mySelf);
// console.log(mySelf.name);
// console.log(mySelf.age);
// console.log(mySelf.skill[2]);
// //နောက်တစ်မျိုး

// console.log(mySelf["job"]);
// console.log(mySelf["name", "age", "skill"]);

//object construct

// let obj ={};

// obj.a = "aa";
// obj.b ="bb";
// obj["c"] = "cc";


// console.log(typeof obj);
// console.log(obj);

//Problem 1ပုစ္ဆာ

// let name = "Mg Mg";
// let age = 15;
// let money = 200;
// money -= 50;

// // console.log(money); //buy oranges
// let mgmgbag = ["mm","eng","bio", false];
// let canMgMgSmoke = false;
// let canMgMgFriendSmoke = true;

// const mgmgObject = {
//     name : "Mg Mg",
//     age : 15,
//     // money : money, //properyနဲ့ valueတူရင် အတူတူရေးလို့ရ
//     money,
//     bag : mgmgbag
// }

// const kyawkyawObject = {
//     name : "Kyaw Kyaw",
//     age : 16,
//     money : 300,
//     bag : ["mm"]
// }

// const myamyaObject = {
//     name : "Mya Mya",
//     age : 15,
//     money : 500,
//     bag : ["mm", "eng", "math", "chem"]
// }

// // console.log(mgmgObject)
// // console.log(kyawkyawObject)
// // console.log(myamyaObject)

// const students = [
//  {  name : "Mg Mg",
//     age : 15,
//     // money : money, //properyနဲ့ valueတူရင် အတူတူရေးလို့ရ
//     money,
//     bag : mgmgbag},
//     {name : "Kyaw Kyaw",
//     age : 16,
//     money : 300,
//     bag : ["mm"]},
//     {
//     name : "Mya Mya",
//     age : 15,
//     money : 500,
//     bag : ["mm", "eng", "math", "chem"]
//     }
// ]

// console.log(students);
// console.log(students[1].name,students[1].age);
// console.log(students[2]);
// console.log(students[2].name);
// console.log(students[2].bag[3]);


//++ -- 
// let num = 5;

// num = num +1;
// num = num +1;
    //or
// num += 1;
// num += 1;
    //or
// ++num
// ++num


// console.log(num++); //နောက်မှလာ နောက်မှဖ့စ်
// console.log(num);

// console.log(++num); //ရှေ့လာ အရင်ဖြစ်
// console.log(num);


// logical opreator

// let condition = true;
// console.log(!condition)
// console.log(condition)

//သာနရီopreator

// let x = 5;
// console.log(x=5 ? true : false); //သာနရီက မှန်မှားစစ်တာ
// console.log(x=3 ? true : false);

// let haveUFinishedDinner = true;

// let result = haveUFinishedDinner ? "ထမင်းစားပြီးပြီ" : "ထမင်းမစားရသေးဘူး";

// console.log(result)

// console.log(haveUFinishedDinner ? "ထမင်းစားပြီးပြီ" : "ထမင်းမစားရသေးဘူး");

//function default 

// function run(text="aaa"){
//     return "This is " + text + ".";
// }

// // console.log(run())// default answer
// console.log(run("bbb")); //argue answer


// //function expressအကြောင်း

// const functionExpress = function (text="aaa"){

//     return  "This is "+ text +".";
// }
// console.log(functionExpress())
// console.log(functionExpress("bbb"))

//ILFE

// (function (){

//     let x=5;
//     let y=10;
//     console.log(x+y)
//     return x+y;
// })()

// console.log((function(){return 5})+5)

//function involke another funcion

function inchesToFeet(input){
        return showResult(input/12 + " ft");
    }

function showResult(text){
    return "The result is "+ text;
}

console.log(inchesToFeet(50));