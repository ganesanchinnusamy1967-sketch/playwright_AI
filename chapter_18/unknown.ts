let unknown:unknown ="sangee";
if(typeof unknown==="string"){
    console.log("hi");
}
//function annotation
function greetname(name:string):string{
    return`hello ${name}!`
}
let gre=greetname("VisakaVel");
console.log(gre);
//arrow function annotation
const multi=(a:number,b:number):number=>a*b;
console.log(multi(5, 3));

//object annotations
let user:{name:string,age:number}={
    name:"visa",
    age:28
}