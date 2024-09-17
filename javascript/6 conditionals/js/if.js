// conditional statements

let customerIsBanned = false;
let soup = "mushroom soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = 'No soup for you';
} else if (soup && crackers) {
    reply = `Here is your ${soup} and crackers.`;
} else if (soup) {
    reply = `Here is your ${soup}`;
} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);