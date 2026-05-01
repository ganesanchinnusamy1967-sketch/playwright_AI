let LoggerMixin = function(Base){
    return class extends Base{
        log(user){
            console.log("login"+user);
        }
    }
}
let ScreenshotMixin = function(Base){
    return class extends Base{
        takescreeenshot(user){
            console.log("Screenshot taken");
        }
    }
}
class Testcase{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("running"+this.name);
    }
}
class final extends ScreenshotMixin(LoggerMixin(Testcase)){
    constructor(name){
        super(name);
    }
     
}
let t = new final("Testcase1");
t.run();
t.log("high");
t.takescreeenshot();