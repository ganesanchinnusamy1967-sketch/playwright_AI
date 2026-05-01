class BasePage{
    constructor(pageName){
        this.pageName = pageName;
    }
    open(){
        console.log("opening the page:"+this.pageName);
    }
    close(){
        console.log("Closing the page:"+this.pageName);
    }
}
class Loginpage extends BasePage{

}
let page = new Loginpage("one");
page.open();
page.close();