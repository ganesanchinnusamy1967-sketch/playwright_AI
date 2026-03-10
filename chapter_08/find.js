// find — returns first matching element

let nums = [10, 25, 30, 45];
nums.find(x => x > 20);  // 25,30,45 -> A -25
console.log(nums)

// findIndex
nums.findIndex(n => n > 20);
console.log(nums.findIndex(n => n > 20));

nums.findLast(n => n > 20); // 45] 
nums.findLastIndex(n => n > 20);// 3
console.log(nums.findLastIndex(n=>n>20));