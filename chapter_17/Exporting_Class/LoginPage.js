import {BasePage} from "./BasePage.js";

export class LoginPage extends BasePage {
    constructor(){
        super("LoginPage");

    }
    login(user){
        console.log(user + "logged in");
    }
    
}

