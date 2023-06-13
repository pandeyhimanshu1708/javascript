// nn bb ss u re the datatypes
// nn => number and null
// bb => boolean and BigInt
// ss => string and Symbol
// u => undefined
// primitive datatypes
let a = null;
let b = 17;
let c = true;
let d = BigInt("17") + BigInt("20");
let e = Symbol("Welcome to Gingerwebs!!");
let f = ("Himanshu");
let g = undefined;

console.table([a,b,c,d,e,f,g]);
console.log(typeof f);


// non primitive data types
const item = {
    "himanshu" : true,
    "pandey" : false,

}
console.log(item["himanshu"]);


//