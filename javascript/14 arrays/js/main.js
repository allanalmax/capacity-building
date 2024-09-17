// arrays

const myArray = [];

//add elements
myArray[0] = "allan";
myArray[1] = 2002;
myArray[2] = false;

// refer to an array
console.log(myArray)

// length
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

//adding to an array
myArray.push("almax"); // adding to the end
console.log(myArray);

const lastItem = myArray.pop(); // removing from the end
console.log(lastItem)

myArray.unshift(9); // adding to the beginning
console.log(myArray);

myArray.shift(); // removing from the front
console.log(myArray);

myArray.splice(2, 1); //removes from a particular position

myArray.splice(0, 1, "almax"); // replacing an element in a particular position

console.log(myArray);

const newArray = myArray.slice(1);
console.log(newArray);

myArray.reverse();
console.log(myArray);

const newString = myArray.join();

const originalArray = newString.split(",");
console.log(originalArray);

const arrayA = ['A', 'B', 'C'];
const arrayB = ['D', 'E', 'F'];

// const jointArray = arrayA.concat(arrayB);
const jointArray = [...arrayA, ...arrayB]; // spread operator
console.log(jointArray);