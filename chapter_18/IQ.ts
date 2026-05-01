let statuscodes:number[]=[200,404,201,500];
let testsuite:string[]=["smoke","regression","unit"];
console.log("statuscodes:", statuscodes);
console.log("Suites:",testsuite);

//objecttype
let userdetails:{name:string;status:string;duration:number}={
    name:"Login Test",
    status:"Pass",
    duration:1200
}
console.log(userdetails.name+"->"+userdetails.status+"->"+userdetails.duration);