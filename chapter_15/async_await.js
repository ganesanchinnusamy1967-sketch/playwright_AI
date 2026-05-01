function openBrowser(){
    return new Promise(function(resolve){
        console.log("Opening the browser...");
    })
}
function goToLoginPage(){
    return new Promise(function(resolve){
        console.log("navigatingg to the login page");
    })
}
function enterCredentials(){
    return new Promise(function(resolve){
        console.log("credentials are entered");
    })
}
function clickLoginButton(){
    return new Promise(function(resolve){
        console.log("Login button is clicked");
    })
}

async function runLoginFlow(){
    let msg1=await openBrowser();
    console.log("Step 1:",msg1);
    let msg2 =await goToLoginPage();
    console.log("Step 2:" ,msg2);
    let msg3=await  enterCredentials();
    console.log("Step3:",msg3);
    let msg4=await clickLoginButton();
    console.log("Step 4:",msg4);

}
runLoginFlow();