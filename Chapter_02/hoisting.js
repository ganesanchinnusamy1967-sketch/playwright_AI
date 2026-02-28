//hoisting na- variable declared panraku munadi  undefined varum
//   console.log(a);
//   var a =20;
//   console.log(a);
// // Step 1 - Defination of functions
// function getUserStatus(){
//     // var status_code = undefined; - not shown to you.
//     console.log(status_code);
//     var status_code = "Active";
//     console.log(status_code);

// }

// // Step 2 - Calling of the functions
// getUserStatus();

// // Note: var is function-scoped, so status is hoisted to
// // the top of getUserStatus(), NOT the global scope.

//let_block_scped.js
// let a ="sangeetha";
// if(true){
//   console.log(a);
//   a ="Ganesan";
//   console.log(a);
// }
// let a = "Pramod";

// if(true){
//     console.log(a); //local varaible , TDZ
//     a = "temp";
//     console.log(a);
// }

// let a = 10
// console.log(a)
// if (true){ 
//     console.log(a); //TDZ
//      a = 20;
// }

//Const
// const a ="sangee";
// console.log(a);
for (var i = 0; i < 5; i++) {
    // do something
    console.log(i); 
}
//console.log(i); 
for (let j = 0; j < 5; j++) {
    // do something
    console.log(j);
}