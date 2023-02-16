
function doIpass (examMark,viberMark){
    if(examMark>=50 && viberMark>=50){
        return "Pass"
    }

    return "Fail"
}

console.log(doIpass(50,50));
console.log(doIpass(40,50));

console.log("--------------------")


function canIvote(NRC,age){

    if (NRC=== "N" && age>=18){

        return "You can give a vote";
    }

    return "You can't give a vote";
    
}

console.log(canIvote("N",30));
console.log(canIvote("t",30));

console.log("--------------------")

function goToMMSIT(busNO){
    if (busNO===65 || busNO==20){

        return "You will reach to MMSIT";
    }

    return "You will not reach to MMSIT"
}


console.log(goToMMSIT(65));
console.log(goToMMSIT(20));
console.log(goToMMSIT(60));

console.log("--------------------")

//notကို အခြေအနေတွေပြောင်းတဲ့အခါမှာသုံးတယ်

let a = "KZT";
console.log (a);
a = !a
console.log (a);
a = !a
console.log (a);
a = !a
console.log (a);

//typeofစစ်ပြီးရေးနည်း


function showMyName (name){
    if (typeof name==="string")
    return name;
    return false;
}

console.log(showMyName("KZT"))
console.log(showMyName(20))
console.log(showMyName(["a","b "]))