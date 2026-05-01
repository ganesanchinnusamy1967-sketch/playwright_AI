//complete login flow

function browserOpening(callback){
    console.log("opening the browser");
    setTimeout(function(){
        console.log("Test1:Browser  opened");
        callback();
    },500);
 }
function goToLoginPage(callback){
    console.log("navigating to loginpage");
    setTimeout(function(){
        console.log("Test2:LoginPage is  opened");
        callback();
    },500);
}
function enterCredentials(callback){
    console.log("entering the credentils");
    setTimeout(function(){
        console.log("Test3:Credentials are entered ");
        callback();
    },500);
}
function clickLogin(callback){
    console.log("Click the login button");
    setTimeout(function(){
        console.log("Test4:Lgin button is clicked");
        callback();
    },500);
}//callback hell
browserOpening(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test5:Login is successful");
            });
        });
    
    });
});
