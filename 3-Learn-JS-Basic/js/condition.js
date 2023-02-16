//if မှာ ရေးထားတဲ့ ကုဒ်တွေပေါ် ဖို့ဆိုရင် (true)ဖြစ်ရမယ်/ falseဆို မပေါ်ဘူး

// if (false) {
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log("d")
//  }
//  if (true) {
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log("d")
//  }

//  if (true) {
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log("d")
//  } else {
//     console.log("This is False")
//  }

//  if (false) {
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log("d")
//  } else {
//     console.log("This is False")
//  }

// function canICome(arriveTime){
//    //၉နာရီကျောင်းရောက်ရင် အတန်းထဲဝင်လို့ရ မဟုတ်ရင်မရ
//     let result;
//    // if (arriveTime<=9){

//    //    result =("အတန်းထဲဝင်ပါ");

//    //    }else {
//    //       result =("အတန်းထဲမဝင်ရ");
//    //    }

//    //    return result;

//    if (arriveTime<=9){ return("အတန်းထဲဝင်ပါ");}
//    return ("အတန်းထဲမဝင်ပါနဲ့");
//    }

// console.log(canICome(9));
// console.log(canICome(8));
// console.log(canICome(9.5));
// console.log(canICome(8.2));


// let mark = 30;

// if(mark>=80) {

//    console.log("Flying Color");
// }
// else if (mark>=40) {

//    console.log("Pass");
// }
// else {
//    console.log("Fail");
// }


if (true){

   console.log("a");
   console.log("b");
   console.log("c");
}else {
   console.log("This is false")
}


function canIcome (wakeUpTime){

   let result;
 //ဒါက တစ်မျိုး
   // if(wakeUpTime<= 9) {

   //    result = "You can come in ";
   // }else
   // {
   //    result = " You can't come in";
   // }

   // return result;

   //ဒါက နောက်တစ်မျိုး

      if (wakeUpTime<=9){
         return "You can come in ";
      }

      return "You can't come in"

}

console.log(canIcome(9))
console.log(canIcome(8))
console.log(canIcome(9.3))
console.log(canIcome(10))