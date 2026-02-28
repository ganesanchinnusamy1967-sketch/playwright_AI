// a=5
// b= a+++++a=>A+B=A→5|6  B→7    =>5+7=12
// b=12
// let c=a++ + ++a + ++a + ++a + a++;
//  =>7|8+9+10+11+11|12==>7+9+10+11+11=48
// c=48
// a=7=> 8|9|10|11|12
// a=12 

let a = 5;                                 
let b = a++ + ++a;                          
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);