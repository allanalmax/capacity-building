//ternary operators
// condition ? ifTrue : ifFalse;

let soup = "Mushroom soup";
let isCustomerBanned = true;

let soupAccess = isCustomerBanned
    ? "Sorry, no soup for you"
    : soup 
    ? `Yes, we have ${soup} today`
    : "Sorry, no soup.";
  
console.log(soupAccess);


let testScore = 77;
let grade =
    testScore > 89
        ? "A"
        : testScore > 79
            ? "B"
            : testScore > 69
                ? "C"
                : testScore > 59
                    ? "D"
                    : "F";

console.log(`My grade is ${grade}`);


let choice = ["rock", "paper", "scissors"];
let choiceIndex = (Math.floor(Math.random() * choice.length));
let computer = choice[choiceIndex];
let playerOne = "rock";

let result =
    playerOne === computer
        ? "Tie game"
        : playerOne === "paper" && computer === "scissors"
            ? "Computer wins"
            : playerOne === "rock" && computer === "paper"
                ? "Computer wins" 
                : playerOne === "scissors" && computer === "rock"
                    ? "Computer wins"
                    : "playerOne wins";

console.log(result);