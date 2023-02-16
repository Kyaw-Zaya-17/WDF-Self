// let x = 5;
        // let myName = "Kyaw Zayar Tun";
        // let myAge = 21;

        // variable ထဲက တန်ဖိုးကို တစ်ခုချင်းစီထုတ်တာနဲ့ အစုလိုက်ထုတ်နည်း
        //  console.log(x);
        //  console.log(myAge);
        // console.log(myName);

        // console.log(x,myName,myAge);

        //value တွေကို reassignလုပ်နည်း

        // let x = 5;
        // console.log(x);
        // x = 10;
        // console.log(x);


            //data type စစ်နည်း
        // let x = 5;
        // let myName = "Kyaw Zayar Tun";
        // let myAge = 21;

        // console.log(x, typeof x);
        // console.log(myName, typeof myName);

        //template string ရေးနည်း

        // console.log("my naem is "+myName+".")
        // console.log(`My name is ${myName} and I am ${myAge}years old.`)


        //comparison opreator
        // let a = 5;
        // let b = "5"
        // console.log(a==b); //dataဘဲစစ်
        // console.log(a===b);//data and typeကအစစစ်
        // console.log(a!=b);
        // console.log(a!==b);

        //function ရေးနည်း

        function run() {

            let x=8;
            let myName = "Kyaw Zayar Tun";
            let myAge = 21;
            let myJob = "Developer";

            console.log("This is "+ 8);
            console.log(`My name is ${myName} and I am ${myAge} years old.`);
            console.log(`I am a Web ${myJob}.`)

            return "This is tesing about return in function";

            
        }

        run(); //ဒါက functionကတွက်ထုတ်ထားတဲ့ တန်ဖိုးမပါဘူး funအတွင်းမှာ consoleထုတ်ထားလို့ ထုတ်ထားတဲ့ဟားပြတာဘဲရှိတယ်
        console.log(run()); //ဒါက returnပြန်ပြီး functionဆီက တန်ဖိုးတောင်းတာ

        let arr=[];

arr[arr.length]="aa";
arr[arr.length]="bb";
arr[arr.length]="cc";
arr[arr.length]="dd";
arr[arr.length]="ee";

console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length-1]);//နောက်ဆုံးအခန်းထုတ်နည်း

// Object ရေးနည်း
//key:value  | property: value;

let obj = {
    name : "Kyaw Zayar Tun",
}
