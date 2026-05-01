let s= Array.isArray([1,2,3,4]);
let s1 = Array.isArray("a");
console.log(s);
console.log(s1);

//every - ellamae true ah  irukanum condition ku apo op la  true  varum 
let res=[50,70,57,45].every (s=>s<60);
console.log(res);

//some - pathi crt ah iruntha  true ah varum op la
let someres =[50,70,57,45].some (s=>s>60);
console.log(someres);