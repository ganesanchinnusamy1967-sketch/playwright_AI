interface APIResponse{
    readonly statusCode:number;
    body:string;
    headers?:object;//?-- means optional
}
//Readonly- can'tmodify the readonly
let response:APIResponse = {
    statusCode:200,
    body:"estimate response",
};
console.log(response.statusCode);
console.log(response.body);
console.log(response.headers);

interface Point{
    readonly x:number;
    y:number;
}
let point:Point = {
    x:12,
    y:80
};
console.log(point.x);
console.log(point.y);
//point.x=20;//error bcz readonly
point.y=100;
console.log(point.y);

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}