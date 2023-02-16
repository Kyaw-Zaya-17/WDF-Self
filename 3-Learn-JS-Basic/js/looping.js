// for (let i=1; i<=3; i++){
//     console.log("a");
//     console.log("b");
//     console.log("c");
//     console.log("=======", i)
// }


//break အကြောင်း

// for (let i=1; i<=5; i++){
//     // if (i===3)break //consoleအပေါ်မှာရေးရင် 3မပါဘူး
//     console.log("=======", i)
//     if (i===3)break //consoleအောက်မှာရေးရင် 3 ပါတယ်
// }
// for (let i=1; i<=5; i++){
//     if (i===3) continue; //ဒါက ဆက်သွားတာ
//     console.log("=======", i)
// }


// const letters =["a","b","c", "d","e","f"];

// for (let i=0; i< letters.length; i++) {

//     console.log("index",i, "==", letters[i])
// }


// const marks = [45,60,70,90,50,75]
// let total=0;
// for (let mark=0; mark<marks.length; mark++) {

//     console.log(marks[mark]);
//     total += marks[mark]
// }

// console.log("total :" ,total)


// const mgmgInfo = {
//     name : " Mg Mg",
//     age : 15,
//     marks : [
//         {
//             id : 1,
//             subject : " Myanmar",
//             mark: 40
//         },
//         {
//             id : 2,
//             subject : " Englsih",
//             mark: 50
//         },
//         {
//             id : 3,
//             subject : " Math",
//             mark: 70
//         },
//         {
//             id : 4,
//             subject : " Chemistry",
//             mark: 80
//         },
//         {
//             id : 5,
//             subject : " Physics",
//             mark: 48
//         },
//         {
//             id : 1,
//             subject : " Bio",
//             mark: 55
//         }
//     ]
// }

// mgmgInfo.totalMark = 0;
// mgmgInfo.results = {};


// // mgmgInfo.results.Myanmar = "success"



// for (let i=0; i<mgmgInfo.marks.length; i++)
// {
//     console.log(mgmgInfo.marks[i].mark);

//     //total ရှာတာ
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
//     //expressionနဲ့ရေးတာ
//     // mgmgInfo.results[mgmgInfo.marks[i].subject] = mgmgInfo.marks[i].mark <= 40 ? "success": "fail";
//     //statement နဲ့ရေးတာ
//     if (mgmgInfo.marks[i].mark >= 40){
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "success"
//     }else {
//         mgmgInfo.results[mgmgInfo.marks[i].subject] = "fail"

//     }
// }

// console.log(mgmgInfo)
// // console.log(mgmgInfo.marks)
// // console.log(mgmgInfo.marks[3])
// // console.log(mgmgInfo.marks[3].mark)


// const mgmgInfo = {
//     name : "Mg Mg",
//     age : 25,
//     marks : [
//         {
//                         id : 1,
//                         subject : " Myanmar",
//                         mark: 40
//                     },
//                     {
//                         id : 2,
//                         subject : " Englsih",
//                         mark: 50
//                     },
//                     {
//                         id : 3,
//                         subject : " Math",
//                         mark: 70
//                     },
//                     {
//                         id : 4,
//                         subject : " Chemistry",
//                         mark: 80
//                     },
//                     {
//                         id : 5,
//                         subject : " Physics",
//                         mark: 48
//                     },
//                     {
//                         id : 1,
//                         subject : " Bio",
//                         mark: 55
//                     }
//     ]
// }

// mgmgInfo.totalMark = 0;
// mgmgInfo.results = {};

// for (let i= 0; i<mgmgInfo.marks.length; i++) {

//     console.log(mgmgInfo.marks[i].mark);
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
//     // mgmgInfo.results[mgmgInfo.marks[i].subject]= mgmgInfo.marks[i].mark >= 40 ? "passs": "fail"; 

//     if (mgmgInfo.marks[i].mark>= 40){
//         mgmgInfo.results[mgmgInfo.marks[i].subject]= "success";
//     }else {
//         mgmgInfo.results[mgmgInfo.marks[i].subject]= "fail";
//     }
// }
// console.log (mgmgInfo);


// for (let i=1;i<=6;i++) {

//     let star = "";
//     for (let x=1; x<=i; x++){
//         star += "* ";
//     }
//     console.log(star, i);
// }

//nested loopingအကြောင်း

// for (let i= 6; i>=1; i--){
//     let star = "";
//     for (let x=1; x<=i;x++){
//         star += "* "
//     }
//     console.log(star, i)
// }

// for (let i=1;i<=6;i++){
//     let star = "";
//     for (let x=1;x<=i;x++){
   
//         star += "* "

//     }
//     console.log(star,i)
// }

// for (let i=6; i>=1; i--){

//     let star = "";
//     for (let x=1; x<=i;x++){

//         star += "* "
//     }
//     console.log(star,i);
// }
 

//nested loopingမှာပါတဲ့ တိကျတဲ့အကြောင်းအရာတစ်ခုကို  functionနဲ့ရေးပြတာ

// function starGenerator(count,elment=" * "){
//     let star = "";
//     for (let i=1; i<=count;i++){
//         star += elment;
//     }
//     return star;
// }

// // console.log(starGenerator(4, "="))

// for (let i=1; i<=7; i++){

//     console.log(starGenerator(i, "= "));
    
// }

// for (let i=7;i>=1;i--){
    
//     console.log(starGenerator(i));
  
// }

//စုံ မ ပေါ်မူတည်ပြီး တွက်

// function starGenerator(count,elment=" * "){
//     let star = "";
//     for (let i=1; i<=count;i++){
//         star += elment;
//     }
//     return star;
// }

// for (let i=1; i<=6;i++){

//     //expressionနဲ့ရေးတာ

//     console.log(starGenerator(i, i%2===0 ? "= " : "* "));

    //conditionနဲ့ရေးတာ
    // if (i%2===0){

    //     console.log(starGenerator(i,"= "));

    // }else {

    //     console.log(starGenerator(i,"* "));


    // }
// }

//rating

// for (let i=1; i<=5; i++){
//     let results= "";

//     for (let x=1; x<=5; x++){

//         if (x<=i){
//             results += "* ";
//         }else{
//             results+= "- ";
//         }

//         // results+= x<=i ? "* ": "- ";//expressionနဲ့ရေးတာ
//     }
    
//     console.log(results,i)
// }


// const rating =[
//     {
//         id : 1,
//         name: "Kyaw Kyaw",
//         rate: 5
//     },
//     {
//         id : 2,
//         name: "Mya Mya",
//         rate: 3
//     },
//     {
//         id : 3,
//         name: "Hla Hla",
//         rate: 2
//     },
//     {
//         id : 4,
//         name: "Su Lay Khin",
//         rate: 4
//     },
//     {
//         id : 5,
//         name: "Yee Mon",
//         rate: 3
//     }
// ]

// for (let i=0; i<rating.length;i++){
//     let result ="";
//     for (let x=1; x<=5;x++){
//         if (x<=rating[i].rate){
//             result+= "* ";
//         }else{
//             result+="- ";
//         }
//     }
    
//     console.log("ID ",rating[i].id, "Rate ",result,"|", rating[i].rate,"|",rating[i].name)
// }

// for (let i=0; i<rating.length; i++){
//     let result= "";
//     for (let x=1; x<=5; x++){
//         if(x<=rating[i].rate){
//             result+= "* "
//         }else{
//             result+="- "
//         }
//     }
//     console.log("id :", rating[i].id,"|","Rate ", result,"|", rating[i].rate,"|",rating[i].name)
// }

//ES6 loopပတ်နည်းအသစ်

const ratings =[
    {
        id : 1,
        name: "Kyaw Kyaw",
        rate: 5
    },
    {
        id : 2,
        name: "Mya Mya",
        rate: 3
    },
    {
        id : 3,
        name: "Hla Hla",
        rate: 2
    },
    {
        id : 4,
        name: "Su Lay Khin",
        rate: 4
    },
    {
        id : 5,
        name: "Yee Mon",
        rate: 3
    }
]


for (rating of ratings){
    // console.log(rating);
    // console.log(rating.name,rating.id)
    for (key in rating){
        console.log(key, rating[key])
    }
    console.log("_________")
}