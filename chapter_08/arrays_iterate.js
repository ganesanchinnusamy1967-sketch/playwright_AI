//for loop
let tests = ["login", "checkout", "search"];
for(let i= 0;i<tests.length;i++){
    console.log(tests[i]);
}
//for..of
let test=0;
for(test of tests){
    console.log(test);
}
//for..in(index value returns)
for(test in tests){
    console.log(test);
}

// forEach (no return value)
tests.forEach((index ,test) => {

    console.log(`${index} : ${test}`);
});
