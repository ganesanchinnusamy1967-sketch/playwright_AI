function step1(callback){
    console.log("open the browser..");
    callback();
}
function step2(callback){
    console.log("go to the loginpage..");
    callback();
}
function step3(callback){
    console.log("enter the credentials.");
    callback();
}
function step4(callback){
    console.log("click login button..");
    callback();
}
step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                console.log("login successfully");
            })
        })
    })
})