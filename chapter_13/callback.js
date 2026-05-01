function placeOrder(item,callback){
    console.log(item +" "+"order is done");
    callback();
}
// // Define
// function print() {
//     console.log("Normal Fn - Done with the order");
// }

// First Way
 //placeOrder("Burger", print);

 //2.another way
//  placeOrder("burger",function () {
//     console.log("oreder is dne");
//  });

//3.Arrowway
placeOrder("burger",()=>{
    console.log("Arrow fn , my order my order is also done");
});
 
