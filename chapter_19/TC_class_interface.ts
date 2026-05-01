interface Executable{
    name:string;
    run():void;
    getStatus():string;
}
class Testcase implements Executable{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run(){
        console.log(this.name +"is running");

    }
    getStatus(){
        return "PASS";
    }
}
let tc:Executable = new Testcase("Normal Tc ");
tc.run();

console.log("call:",tc.getStatus());
