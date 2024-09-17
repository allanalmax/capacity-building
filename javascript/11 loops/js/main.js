
// loops

// while loop

let myNumber = 0;
//while (myNumber <= 10) {
//    console.log(myNumber);
//    myNumber++;
//}

//do {
//    myNumber++;
//    console.log(myNumber);
//} while (myNumber < 10);

let name = "Allan";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 3) {
        counter += 2;
        continue;
    }
    if (myLetter === "a") break;
    counter++;
}
console.log(counter);


// for loop 

//let name = "allan";
//for (let i = 0; i < name.length; i++) {
//    console.log(name.charAt(i));
//}