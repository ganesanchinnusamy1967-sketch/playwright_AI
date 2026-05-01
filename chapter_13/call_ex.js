// function greetByName(name,callback){
//     console.log("Welcome" +"  " +name);
//     callback();
// }
// greetByName("Sange",function(){
//     console.log("I am new to js");
// });


function runTest(testName,callback){
    console.log("running the testcase" + " "+testName);
    let status="Pass"
    callback(testName,status);
}
runTest("singnUP",function(name,result){
    console.log("Testname :"+name+"->"+"status:"+result);
})