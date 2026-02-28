let a=75;
let b=45;let c =60;
if(a===b && b===c && c===a){ 
    console.log("the triangle is equilateral (all sides are equal)");
}else if (a===b && c===75||a===c && b===75||b===c && a===75){
    console.log("isosceles (exactly two sides are equal)");
}else if(a!==b && b!==c && a!==c){
    console.log("All sides are not equal");
}