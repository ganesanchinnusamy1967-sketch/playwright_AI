function apicall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name +"API call successfully");
        },1000);
    });
}
async function sequentialTest(){
    console.log("Starting to test");
    let start = Date.now();
    console.log(start);
    let r1 = await apicall("Login");
    console.log(r1);
    let r2 = await apicall("Dashboard");
    console.log(r2);
    console.log("Time:"+(Date.now() - start) + "ms")
    console.log("End test");

}
sequentialTest();