interface Testhook{
    (testname:string):void;
}
let beforeEach:Testhook = function (testname: string): void  {
    console.log("before each hook"+testname);
}
let afterEach:Testhook =function (testname: string): void {
    console.log("after each hook"+testname);
}
beforeEach("Logintast");
afterEach("signoff");