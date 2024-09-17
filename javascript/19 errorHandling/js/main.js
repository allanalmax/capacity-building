// errors & error handling
"use strict";

// variable = "Dave"; // reference error
// console.log(variable);

// Object..create(); // syntax error

// const name = "joe";
// name = "jedi"; // type error

const makeError =  () => {
    let i = 1;
    while (i <= 5) {
        try {
            // throw new customError("This is a custom error");
            // throw new Error("This is an error");
            
            if (i % 2 !== 0) {
                throw new Error("odd number");
            }
            console.log("Even number");
            // const name = "Joe";
            // name = 'Dave'
        } catch(err) {
            // console.log(err);
            // console.error(err);
            // console.warn(err);
            // console.table(err);

            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);
        } finally {
            console.log("...finally");
            i++;
        }   
    }
};

makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "CustomError";
//     this.stack = `${this.name}: ${this.message}`;
// }
