class Student{
    static CollegeName = "MKCE";
    constructor(name){
        this.name= name;
    }
    static display(){
        console.log(this.name + "is an alumini of" + Student.CollegeName);

    }
}
let s1 = new Student("Murugan");

console.log(Student.CollegeName);
console.log(s1.name);