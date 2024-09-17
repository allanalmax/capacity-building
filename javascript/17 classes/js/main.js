// classes

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    
    getToppings() {
        return this.toppings;
    }
    setToppings(topping) {
        this.toppings.push(topping);
    }
    
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza`);
    }
}

const myPizza = new Pizza("cheese", "large");
myPizza.setCrust("thin");
myPizza.bake();

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());