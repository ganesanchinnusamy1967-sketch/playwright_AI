let testRun=new Promise(function(resolve,reject){
    reject("Assertion Failed");
});
testRun.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Always run");
});
//finally -runs always runs