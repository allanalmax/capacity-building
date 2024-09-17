// strings
const myVariable = "Mathematics";

//length property
console.log(myVariable.length);

//string methods
console.log(myVariable.charAt(6))
console.log(myVariable.indexOf("Mat")); //returns the position of the first occurance of the group of strings
console.log(myVariable.lastIndexOf("at")); //returns the position of the last occurance of the group of strings

console.log(myVariable.slice(3, 6)); //returns chars from start to position before last
console.log(myVariable.slice(3)); //returns all chars to the last position
console.log(myVariable.slice(3, 2)); //returns nothing
console.log(myVariable.slice(3, 4)); //returns char at the first postiononly

console.log(myVariable.toLowerCase()); 
console.log(myVariable.toUpperCase());

console.log(myVariable.includes("tic")); //returns a boolean

console.log(myVariable.split("e")); //splits the variable without the split char
console.log(myVariable.split("")); //splits every char 
