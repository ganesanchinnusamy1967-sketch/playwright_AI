//1.
interface UserData{
    name:string;
    age:number;

}
let User:UserData ={
    name:"Sangeetha",
    age:28
}
console.log(User.name+"'s age is "+User.age);
//2.
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

//3.
interface Animal{
    name :string;
 
}
interface Dog extends Animal{
    breed:string;
    bark():void;
    
}
const dog:Dog = {
    name:"labrador",
    breed:"pup",
    bark(){
        console.log("Dogs generally bark as bowbow");
    }
};
dog.bark();

//4.
interface Employer{
    name:string;
    age:number;
    greet():string;


}
class Employee implements Employer{
    name:string;
    age:number;
    empId:number
    constructor(name:string,age:number,empId:number){
        this.name= name;
        this.age =age;
        this.empId =empId;
    }
    greet(){
        return`Helo this is ${this.name}`;
    }
}
const emp:Employee=new Employee("Murugan",12,1234);
console.log(emp);
