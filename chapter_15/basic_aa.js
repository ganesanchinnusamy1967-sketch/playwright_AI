async function getTestResults(){
    return "Pass","high";
}
getTestResults().then(function(result,priority){
    console.log(result);
    console.log(priority);
});


async function runTest(){
    let res1 = await Promise.resolve("Login test passed successfully");
    console.log(res1);
    let res2 = await Promise.resolve("Order placed test passed successfully");
    console.log(res2);
}
runTest();