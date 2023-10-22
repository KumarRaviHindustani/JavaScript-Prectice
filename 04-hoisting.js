// JavaScript me valiables ko memory allotcate karane ki prakriya ko hi hoisting kahate hai.
// fonction ko declear karane se pahale bhi function ko call kar sakate hai aur yah sab hoisting ki madad se hi hoga kyoki variables ke value ke liye memory allot hoti hai
// variable function aur arrow function me function ko declaration se pahale call nahi kar sakate hai aur isame hoisting apply nahi hota hai.
 // Ex :-




//  RUn karega
//  sayHi();
//  function sayHi(){
//     console.log("Hi !");
//  }


//  RUn Nahi karega
//  sayHi();
//  var sayHi = () => console.log("Hi !");





// // RUn Nahi karega
// sayHi();
// var sayHi(); = function(){
//     console.log("Hi !");
// }