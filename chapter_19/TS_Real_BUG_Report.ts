// interface BugReport{
//     id:number;
//     title:string;
//     severity:string;
//     stepsToReproduce:string[];
// }

// function buglog(bug:BugReport):void{
//     console.log("Bug id:"+bug.id+"Severity:"+bug.severity+"->"+bug.title);
//     bug.stepsToReproduce.forEach(step: string,i:number){
//         console.log("Step"+(i+1)+step);
//     }
// }

interface UserData{
    name:string;
    age:number;

}
let User:UserData ={
    name:"Sangeetha",
    age:28
}
console.log(User.name+"'s age is "+User.age);

interface LoginDetails{
    fname:string;
    lname:string;
    city?:string;
    pincode?:number;
}
let detail:LoginDetails ={
    fname:"Muruga",
    lname:"Sangee",
    city:"Namakkal",
    pincode:635109
}
console.log(detail.fname+"=>"+detail.lname+"=>"+detail.city);
