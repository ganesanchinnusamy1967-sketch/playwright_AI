class TestCase{
    constructor(name,status,priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    test(){
        console.log(this.name+" -> "+this.status+"->"+this.priority);
    }
    
    
}
let login_test = new TestCase("Login test","Pass","High");
login_test.test();
// class TestCase {
//     constructor(name, status, priority) {
//         this.name = name;
//         this.status = status;
//         this.priority = priority;
//     }
//     display() {
//         console.log(this.name + " → " + this.status + " → " + this.priority);
//     }
// }

// let loginTest_ref = new TestCase("Login Test", "PASS", "P0");
// let signupTest_ref = new TestCase("Signup Test", "FAIL", "P1");

// loginTest_ref.display();