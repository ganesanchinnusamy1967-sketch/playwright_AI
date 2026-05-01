class BasePage{
    constructor(name){
        this.name = name;
    }
    open(){
        console.log("opening"+this.name);
    }

}
class AuthPage extends BasePage{
    login(user){
        console.log("loggin"+user);
    }
}
class InitialPage extends AuthPage{
    constructor(){
        super("Admin Panel");
    }
    manageuser(){
        console.log("managing user");
    }
}
let c1=new InitialPage();
c1.open();
c1.login("VisakaVel");
c1.manageuser();