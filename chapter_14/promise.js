//promise is an object it wrapsa value which will be available later 
let order = new Promise(function(resolve,reject){
    let foodready = false;
    if (foodready ===true){
        resolve("Order is ready");
    }else{
        reject("order is cancelled");
    }
})
console.log(order);