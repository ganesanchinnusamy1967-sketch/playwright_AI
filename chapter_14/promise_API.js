let apicall = new Promise(function(resolve,reject){
    resolve({status:200,body:"cover"});
})
apicall.then(function(result){
       console.log(result);
       console.log(result.status);
       console.log(result.body);
});
