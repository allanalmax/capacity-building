//switch statements

let choice = ["rock", "paper", "scissors"];
let choiceIndex = (Math.floor(Math.random() * choice.length));
let computer = choice[choiceIndex];
let playerOne = "rock";
let result;

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            result = "Computer wins";
        } else {
            result = "PlayerOne wins";
        }
        break;
    case "paper":
        if (computer === "scissors") {
            result = "Computer wins";
        } else {
            result = "PlayerOne wins";
        }
        break;
    default:
        if (computer === "rock") {
            result = "Computer wins";
        } else {
            result = "PlayerOne wins";
        }
}

console.log(`Computer choice: ${computer}`)
console.log(result);