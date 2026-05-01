// function apicall(name){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(name +"API call successfully");
//         },1000);
//     });
// }
// async function sequentialTest(){
//     console.log("Starting to test");
//     let start = Date.now();
//     let [r1,r2,r3]= await Promise.all(
//         [apicall("Login"),
//          apicall("Dashboard"),
//          apicall("End")
//         ]
//     );
//     console.log(r1);
//     console.log(r2);
//     console.log(r3);
// }
// sequentialTest();

 console.log("A");

async function test() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

test();
console.log("D");