function sayHello(msg:string){
    console.log(msg);
}
let res=sayHello("convey my vote to tvk");
console.log(res);


//// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}