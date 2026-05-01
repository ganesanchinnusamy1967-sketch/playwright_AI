enum Browser{
    Chrome = "chrome",
    Edge = "edge",
    Safari = "safari",
    FireFox = "firefox"

}
function BrowserSelection(browser:Browser):void{
    switch(browser){
        case Browser.Chrome:
            console.log("Chrome is launching:");
            break;
        case Browser.Edge:
            console.log("Edge is launching:");
            break;
        case Browser.Safari:
            console.log("Safari is launching:");
            break;
        case Browser.FireFox:
            console.log("Firefox is launching:")     

    }
}
BrowserSelection(Browser.Chrome);

//2.
enum HTTPMethod{
    GET="GET",
    POST="POST",
    PUT ="PUT",
    DELETE="DELETE"
}
function APIRequest(method:HTTPMethod):void{
    console.log(method+"=>"+"200-ok");
}
APIRequest(HTTPMethod.POST);