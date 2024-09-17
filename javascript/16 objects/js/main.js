// objects
// key-value pairs in curly braces

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

console.log(myObj.answer);
console.log(myObj.action());
console.log(myObj["hobbies"]);


// object 2
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {return "Whoosh!"};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {return "Shhh"};
console.log(tesla.engine());

// object 3
const band = {
    vocals: "Robert",
    guitar: "Jimmy",
    bass: "John",
    drums: "Johnny"
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// destructuring objects
const { guitar: guitarPlayer, bass: bassPlayer} = band;
console.log(guitarPlayer);
console.log(bassPlayer);

const { guitar, bass} = band; // simplified destructuring
console.log(guitar);
console.log(bass);

function sings({vocals}) { 
    return `${vocals} sings`; // destructuring using functions
}
console.log(sings(band));