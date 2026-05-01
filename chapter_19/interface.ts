interface TestCase{
    id:number;
    name:string;
    status:string;
    duration:number;
}
let test1:TestCase={
    id:1,
    name:"LoginTest with valid credentials",
    status:"PASS",
    duration:1000

};
console.log("TC-"+test1.id +test1.name + test1.status + test1.duration);
let test2:TestCase={
    id:2,
    name:"LoginTest with invalid credentials",
    status:"FAIL",
    duration:100

};
console.log("TC-"+test2.id +"->" + test2.name +"->"+ test2.status +"->"+ test2.duration);