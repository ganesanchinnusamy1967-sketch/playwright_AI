class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(this.name + " launched")
    }
    openBrowser(){
        console.log("opening the browser");

    }
    closeBrowser(){
        console.log("closing the browser");
    }
}
let chrome = new Browser("Chrome");
chrome.openBrowser();
chrome.closeBrowser();

console.log(chrome.isOpen);