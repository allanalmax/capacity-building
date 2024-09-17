// classes

// factory function
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//    
//     return {
//         bake: () => console.log(`Bsking a ${size} ${crust} crust pizza`)
//     };
// }
//
// const Pizza1 =  pizzaFactory("small");
// Pizza1.bake();

class Pizzas {
    crust = "original"; // public
    #sauce = "traditional"; // private field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}

const pizza1 = new Pizzas("large");
pizza1.hereYouGo();
console.log(pizza1.crust);