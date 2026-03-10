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