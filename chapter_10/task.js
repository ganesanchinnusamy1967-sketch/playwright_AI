let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1];

console.log(status);
//500


let env = "staging"; let module = "auth"; let count = 7; let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId);//staging_auth_007



 let actual = " PASS "; let expected = "pass"; actual.trim().toLowerCase() === expected;
 console.log(actual.trim().toLowerCase() === expected);//true



let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );

console.log(params);//{ query: 'login', page: '2', sort: 'asc' }
 

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); //Bearer ***REDACTED***