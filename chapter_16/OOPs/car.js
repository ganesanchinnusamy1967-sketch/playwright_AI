class Car{
    constructor(name){
        this.name = name;
    }
    drive(){
        console.log("driving the car "+this.name);
    }
    carname(){
        console.log("detail of car is "+this.name+" model  2019")
    }
}
let c1 = new Car("Suzuki");
c1.drive();
c1.carname();