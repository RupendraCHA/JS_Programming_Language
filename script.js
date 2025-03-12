window.console.log(
  "I am \b \bLearning \nJavascript \nfrom \nSuresh techs youtube channel"
);
console.log("Hello Rupendra");
console.log("Hello1");
console.log("Hello2");
setTimeout(function () {
    for (let i = 0; i < 3000000000; i++){
        if (i === 2000000000){
            console.log("Hello3")
        }
    }
},0)

console.log("Hello4");

// String

let myName = new String("Rupendra")

console.log(myName.toUpperCase())
console.log(typeof myName);

let id1 = Symbol(14567)
console.log(id1.description)
let id2 = Symbol()
console.log(id2)