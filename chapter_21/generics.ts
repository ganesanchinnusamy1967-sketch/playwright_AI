// function getResult(name:string){
//       return name;
// }
    
// let res=getResult("Murugan");
// console.log(res);


function getResult<T>(results:T[]):T{
      return results[0]!;
}
    
let res=getResult<number>([200,400,500]);
console.log(res);
let res1=getResult<string>(["Murugu","Guhan"]);
console.log(res1);
