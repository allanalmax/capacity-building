// JSON

// object 1
const myObj = {
    alive: true,
    answer: 443,
    hobbies: ["eat", "sleep"],
    drinks: {
        morning: "tea",
        afternoon: "water"
    },
    action: function () {
        return `Time for ${this.drinks.morning}`;
    }
}; 

console.log(myObj);
console.log(myObj.action());
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj) //converts objects to strings
console.log(sendJSON);
console.log(typeof sendJSON)

const receiveJSON = JSON.parse(sendJSON); // converts strings into objects
console.log(receiveJSON);