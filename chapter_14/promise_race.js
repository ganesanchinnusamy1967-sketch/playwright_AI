let fastRunner = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Fast 100ms");
    },100);
})
let slowRunner = new Promise(function(resolve){
    setTimeout(function(){
        resolve("slow 500ms");
    },50);
})
Promise.race([fastRunner,slowRunner]).then(function(results){
    console.log("Winner:",results);
})
//Promise.race -returns the first resolved or rejected promise among the promises
 let t1 = Promise.resolve("PASS");
 let t2 = Promise.reject("FAIL");
 let t3 = Promise.resolve("PASS");

 Promise.all([t1, t2, t3])
     .then(function (r) { console.log("All:", r); })
     .catch(function (err) { console.log("Stopped:", err); });