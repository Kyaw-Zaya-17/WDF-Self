
//for of  နဲ့for inကိုarray မှာစမ်းကြည့်ချင်း
const fruits = ["grape","mango","banana","lemon","apple"];
//ဒါက လက်‌ဟောင်းနည်း
// for (let i=0; i<fruits.length; i++){

//     console.log(i, fruits[i])
// }


//ဒါက es6ကအသစ်

// for (fruit of fruits){
//     console.log(fruit);
// }

// for (index in fruits){
//     console.log(index, fruits[index])
// }

//for inကို objမှာစမ်းကြည့်

const mgmginfo={
    name : "Mg Mg",
    age : 22,
    job : "student"
};

for (key in mgmginfo){

    console.log(key,": ", mgmginfo[key])
}