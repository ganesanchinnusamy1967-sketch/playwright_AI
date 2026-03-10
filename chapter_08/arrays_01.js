 let products =["mobile","perfume","watch","eyeglass","belt"];
// console.log(products[0]);
// console.log(products[4]);
// console.log(products[5]); //undefined

//loop products
// for(let i=0 ;i< products.length;i++){
//   console.log(products[i]);
// }

//Push()& unshifht()
//Push- elements at last 
products.push("shoes");
console.log(products[5]);
//console.log(products);

//unshift - adds element at the beginning
products.unshift("socks");
console.log(products);

//pop() & shift()
//pop()-removes at the last element
products.pop();
console.log(products);
//shift()-removes the first element
products.shift();
console.log(products);

//includes()- searching the elements o/p-will be boolean 
console.log(products.includes("socks"));

//indexof()-searching the index of element
console.log(products.indexOf("belt"));