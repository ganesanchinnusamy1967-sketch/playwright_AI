let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][1]);
console.log(grid[0][2]);
console.log(grid[1][1]);
console.log(grid[1][2]);
console.log(grid[2][0]);
console.log(grid[2][1]);
console.log(grid[2][2]);

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {

    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" ");

}
placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});
function placeOrder(item,callback){
 console.log("order placed");
 callback();

}
let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result, index) {
    console.log("Test" + index + " -> " + result);
});

console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received!")
}, 2000);

console.log("Test 3: Moving to next last");