function openBrowser(){
    return new Promise(function(resolve){
        console.log("Opening the browser....")
    });

}
function navigateToLoginPage(){
    return new Promise(function(resolve){
        console.log("navigating to login page....")
    });

}
function enterCredentials(){
    return new Promise(function(resolve){
        console.log("credentials entered....")
    });

}
function clickLogin(){
    return new Promise(function(resolve){
       console.log("clicked login button....")
    });

}
openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg);
        return navigateToLoginPage();
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });
// openBrowser()
//  .then(function(msg){
//     console.log("Step1:",msg);
//     return navigateToLoginPage();
//  }).then(function(msg){
//     console.log("step2:",msg);
//     return  enterCredentials();
//  }).then(function(msg){
//     console.log("step3:",msg);
//     return clickLogin();
//  }).catch(function(error){
//     console.log("error:",error);
//  }).finally(function(){
//     console.log("Login successful")
//  });