// What is an object in JavaScript?
// How do you access object properties?
// Difference between dot and bracket notation
// How to add and delete properties?
// How to check if a property exists?
// What is Object.keys()?
// What is Object.values()?
// What is Object.entries()?
// How to loop through an object?
// 1.Objects in javascripts are the collection of data stored as a key value pairs.
const person ={

name : "VisakaVel",
age  : "11",
city : "Namakkal"

};
console.log(person.name); // Visakavel
// 2.
console.log(person["name"] );// Visakavel
console.log(person["age"]);//11
//3.dot-simple & clean,works with fixed name
//bracket -more flexible, works with dynamic names

//4
console.log(person.state ="TN");//TN
console.log(delete person.city);//true
//5.
console.log("state" in person);//true
console.log(person.hasOwnProperty("name"));//true
//6.
console.log(Object.keys(person));//[ 'name', 'age', 'state' ]
console.log(Object.values(person));//[ 'VisakaVel', '11', 'TN' ]
console.log(Object.entries(person));//[ [ 'name', 'VisakaVel' ], [ 'age', '11' ], [ 'state', 'TN' ] ]

//loop
for(let key in person){
    console.log(key,person[key]);
}
// name VisakaVel
// age 11
// state TN

Object.keys(person).forEach(key=>{
    console.log(key,person[key]);
});
// name VisakaVel
// age 11
// state TN

Object.values(person).forEach((key,value)=>{console.log(key,person[value])});
// VisakaVel undefined
// 11 undefined
// TN undefined
Object.entries(person).forEach((key,entries)=>{console.log(key,person[entries])});
// [ 'name', 'VisakaVel' ] undefined
// [ 'age', '11' ] undefined
// [ 'state', 'TN' ] undefined