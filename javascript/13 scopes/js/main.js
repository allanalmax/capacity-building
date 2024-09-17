// var, let, and const

var x = 1; //used in legacy 
var x = 2; //can be overriden
console.log(x);

let v = 1; //cannot be overriden
v = 2; //can be reassigned

const y = 1; //cannot be reassigned or overriden

// global variables
var m = 1;
let n = 3;
const s = 2;

// local scope
{
    let d = 2;
}

function myFunc() {
    const e = 4; 
}

myFunc();
    
var variable1 = 1; //function scoped
let variable2 = 2; // block scoped
const variable3 = 3;

console.log(`global: ${variable1}`);
console.log(`global: ${variable2}`);
console.log(`global: ${variable3}`);

function myFunc2() {
    var variable1 = 10;
    const variable3 = 11;
    
    {
        var variable1 = 12; // function scoped
        const variable3 = 13; //block scoped 
        console.log(`block: ${variable1}`);
        console.log(`block: ${variable2}`);
        console.log(`block: ${variable3}`);
    }

    console.log(`function: ${variable1}`);
    console.log(`function: ${variable2}`);
    console.log(`function: ${variable3}`);
}

myFunc2();