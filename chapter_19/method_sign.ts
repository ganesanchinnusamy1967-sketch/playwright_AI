interface calculator{
    add:(a:number,b:number)=>number;
    sub:(a:number,b:number)=>number;
    mul:(a:number,b:number)=>number;
}
let calc:calculator = {
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    mul:(a,b)=>a*b
};
console.log(calc.add(3,2));