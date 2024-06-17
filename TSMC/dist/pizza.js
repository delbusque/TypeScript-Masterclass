"use strict";
class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    changeBase(base) {
        this.base = base;
    }
}
let pizza = new Pizza('New York', 14.99);
pizza.changeBase('garlic');
pizza.addTopping('olives');
pizza.addTopping('peppers');
pizza.removeTopping('olives');
console.log(pizza);
