//areaတွက်တဲ့ funတည်ဆောက်မယ်။ width & breathယူပါမယ်။ areaကိုတွက်ပြမယ်။ အဖြေကို sqftနဲ့ ထုတ်။
//တွက်ထားတဲ့ w,b,areaတွေကို မှတ်တမ်းအဖြစ် သိမ်းထားပါမယ်.

const records= []; // recordလုပ်ဖို့ arryသတ်မှတ်

function caculArea (width,breath){
    
    let area = width*breath;
    let objRecord = {
        width : width,
        breath: breath,
        area : area + "sqft"
    } // ဝင်လာမယ့်စာတွေကို objနဲ့သိမ်း

    records[records.length]= objRecord;// objကရလာတဲ့ recordsတွေကို arryမှာသိမ်း
    return area+ "sqft";


}

console.log(caculArea(30,40))
console.log(caculArea(80,40))
console.log(caculArea(90,40))
console.log(caculArea(50,40))


console.table(records);

// const records = [];

// function caculArea(width,breath){
//     let area = width*breath;
//     let recordsObj = {
//         width : width,
//         breath: breath,
//         area : area + " sqft"
//     }

//     records[records.length]=recordsObj;
//     return area + " sqft";
// }

// console.log(caculArea(40,50))
// console.log(caculArea(90,20))
// console.log(caculArea(40,90))

// console.table(records);


// const records = [];

// function caculArea(width,breath) {
//     let area = width * breath;

//     let recordsObj = {
//         width : width,
//         breath: breath,
//         area : area + " sqft"
//     }
//     records[records.length]=recordsObj;
//     return area + " sqft";
// }

// console.log(caculArea(40,50));
// console.log(caculArea(80,50));
// console.log(caculArea(30,50));

// console.table(records)