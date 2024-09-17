//user input

let myBoolean = confirm("Ok === true\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");

if (name) {
    console.log(name.trim());
} else {
    console.log("You didn't enter your name");
}