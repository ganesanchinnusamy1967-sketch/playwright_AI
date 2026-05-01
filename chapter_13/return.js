function add(a,b,callback){
    return callback(a,b);
}
add(6,9,function(x,y){
console.log("sum:"+(x+y));
})