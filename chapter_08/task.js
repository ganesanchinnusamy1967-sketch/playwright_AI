//1.every()-> matches all condition
let responses = [200, 201, 404, 500, 404, 200, 503];

let result =responses.every(s => s>= 200 && s <=299);
console.log(result);
//2.first non-success error (find()->Get first matching element)
let first_nn_success=responses.find( s=>s<200 ||s >299);
console.log(first_nn_success);
// unique
let uniquewords = [...new Set(responses)].sort((a,b) =>a - b);
console.log(uniquewords);

//new Set(responses)-> removes duplicate


let namelists =["sangee","vel","pravin","bala","vel","visakavel"];
let unquenames =[...new Set(namelists)].sort();
console.log(unquenames)

//////////////////////////


//2. What is wrong with this code? Fix it.

// let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
// console.log("Fastest:", sorted[0]);

//* yes we have bug in the code. sort() method is not  used for comparing numbers.

//3.deep vsshallow copy
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);

// op of suite1= status:”fail” .because here deep copy is used  just assigning the values from suite1 to suite2 .
// then updating the index[0] with status =”fail”.so we get op as op of suite1= status:”fail”