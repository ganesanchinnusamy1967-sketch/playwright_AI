// Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection.
//  The system should lock the account after 3 consecutive failed attempts.
//   Use a do...while loop to process login attempts from an array. 
//   Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
// Validate using strict equality (===) and logical operators (&&).
//alid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
const validEmail = "admin@testingacademy.com";
const validPassword ="Test@1234"
let attempts;
// for ((validEmail===true && validPassword===true && attempts===1);attempts<=3;attempts++){
//    if(attempts===1){
//     Console.log("login successfully")
//    }else if(attempts===2){
//     console.log("login Successfully");
//    }else if(attempts===3){
//     console.log("login successfully");
//    }else{
//     console.log("login failed");
//    }
// }


do {
    console.log("done")
} while (condition);