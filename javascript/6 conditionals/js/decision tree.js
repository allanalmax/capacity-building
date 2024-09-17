let choice = ["rock", "paper", "scissors"];
let choiceIndex = (Math.floor(Math.random() * choice.length));
let computer = choice[choiceIndex];
let playerOne = "rock";
let result;

if (playerOne === computer) {
    //tie
    result = "Computer wins";
} else if (playerOne === "rock") {
    if (computer === "paper") {
        //computer wins
        result = "Computer wins";
    } else {
        //playerOne wins
        result = "PlayerOne wins";
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        //computer wins
        result = "Computer wins";
    } else {
        //playerOne wins
        result = "PlayerOne wins";
    }
} else if (playerOne === "scissors") {
    if (computer === "rock") {
        //computer wins
        result = "Computer wins";
    } else {
        //playerOne wins
        result = "PlayerOne wins";
    }
}

console.log(`Computer choice: ${computer}`)
console.log(result);