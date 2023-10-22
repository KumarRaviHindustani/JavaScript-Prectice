// variables ko nimn prakar se declare kiya ja sakata hai







// 01 - const ka upyog karake
/* const ke upyog se ham ek constant value (variable) banate hai 
jisako bad me change nahi kiya ja sakata hai agar change karane ki koshis kiya jata hai to output
error aata hai */
console.log("const keyword dvara variables ka declaration");
const a = 20;
/* a=22  output error aayega */
const b = 30;
c = a + b;   // c ki value change kiya ja sakata hai kyoki yah const ke dvara declare ahi kiya gaya hai
console.log(c);










// 02 - let ka upyog karake
console.log("let keyword dvara variables ka declaration");
let f = 10;
let g = 20;
console.log(f + g);

let e, d;
e = 25;
d = 35;
console.log(e + d)










// 03 - var ka upyog karake
console.log("Var keyword dvara variables ka declaration");
var h = 10;
var i = 20;
console.log(h + i);

var j, k;
j = 25;
k = 35;
console.log(j + k)





console.log("Automatically variables ka declaration");

l = 90;
m = 10;
console.log(l + m);