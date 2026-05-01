let apicall = new Promise(function(resolve,reject){
    reject({status:500,body:"Internal Server Error"});
});
apicall.then(function(result){
    console.log(result);

}).catch(function(error){
    console.log(error);
    console.log(error.status);
})
//.then() runs only when the promise resolve successfully
//.catch() runs only when the promise is rejected
