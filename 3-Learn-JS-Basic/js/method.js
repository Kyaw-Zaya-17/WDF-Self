
// const myself = {
//     // property
//     name : "Kyaw Zaryar Tun",
//     age : 22,
//     job : "Developer",

//     //method

//     teach : function (what, where) {

//         // return "I can teach " + what + " at " + where ;
//         return this.name+" can teach " + what + " at " + where ;
//     },

//     //method ES6

//     learn (anything = "anything"){
//         // return "I can learn "+anything+"."; 
//         // return this.name+" can learn "+anything+"."; 
//         return `${this.name} can learn ${anything}`;
//     },

//     showThis : function(){
//         console.log(this);
//         console.log(this.name, this.age, this.learn());
//     }

// }

// // console.log(myself.showThis())

// console.log(myself.teach("English", "International Organization"))
// console.log(myself.learn("backend"));
// // console.log(myself.learn());

// // console.log(myself);


const myself = {
    //property
    name : "Kyaw Zaryar Tun",
    age : 22,
    job : "Developer",

    //method
  write : function (what, where){
        return this.name +" is a multi  " + what + " at " + where ;
    },

    //ES6 method

    learn(anything="anything"){
        return `${this.name} can learn ${anything}.`
    },

    //thisအသုံးပြုနည်း

    showThis : function(){
        // console.log(this)
        console.log(this.name, this.age, this.write("millionare","Globaly"))
    }
}
console.log(myself.showThis())
console.log(myself.write("millionare","Myanmar"));
console.log(myself.learn());
console.log(myself.learn("backend"));
