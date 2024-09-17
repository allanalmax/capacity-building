//Numbers

const myNumber = 42;
const myFloat = 42.34264;
const mystring = "34";

console.log(myNumber);
console.log(myFloat);

console.log(myNumber === myFloat);

console.log(Number(mystring)); //changes the string to an integer

//Number methods
console.log(Number.isInteger(myNumber)); //determines if a number is an integer

console.log(Number.parseFloat(myNumber)); //parses an argument and returns a floating point number

console.log(myFloat.toFixed(2)); //rounds up by removing trailing decimals, returns string data

console.log(Number.parseInt(mystring)); //parses a string and returns an integer

console.log(myFloat.toString()); //returns a string representing a number

