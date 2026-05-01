class animal{
    constructor(name){
        this.name = name;

    }
    eat(){
        console.log(this.name+" is eating");
    }
    sleep(){
        console.log(this.name + " is sleeping");
    }
}
class Dog extends animal{
    constructor(name,breed){
        super(name);
    }
    bark(){
        console.log(this.name+" is barking");
    }
}
let dog = new Dog("Pappu","Puppy");
dog.eat();
dog.sleep();
dog.bark();