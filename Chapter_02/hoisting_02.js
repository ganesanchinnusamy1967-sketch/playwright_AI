// var x = 10;
// console.log(x);
// function printX() {
//     var x =40;
//     console.log(x);   // 40
//     var x = 20;
//     console.log(x);   // 20
// }
// printX();
var x = 10;
console.log(x);
function printX() {
    console.log(x);   // undefined (NOT 10!)
    var x = 20;
    console.log(x);   // 20
}
printX();