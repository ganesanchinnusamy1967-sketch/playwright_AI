let fruits =["Apple","orange","grapes","kiwi","banana","mango"];
// array.splice(start, deleteCount, item1, item2, ...)
// Parameters

// start → Index where changes begin

// deleteCount → Number of elements to remove

// item1, item2... → Elements to add
// fruits.splice(1,1,"pineapple");
// console.log(fruits);

//array.slice(start, end)
// Parameters

// start → Starting index (included)

// end → Ending index (not included)
let result = fruits.slice(1,3);
console.log(result);

let arr = [1, 2, 3, 4, 5];

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 
console.log(arr.slice(1, 3));
console.log(arr.slice(2, 4));

console.log(arr.slice(2, 5));

console.log(arr.slice(2));

console.log(arr.slice(-2)); //start from the -1 and till 2. 
console.log(arr.slice(-3));


console.log(arr.slice(0));
console.log(arr.slice(-5));

//concat
let a= [1,2];
let b=[3,4];
let  c= a.concat(b,[6,7]);
console.log(c);
//spread modern way
let d=([...a,...b]);
console.log(d);
//join
let v =["sangee","visakavel","pravin"].join("|");
console.log(v)
