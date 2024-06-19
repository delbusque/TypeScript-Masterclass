"use strict";
class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    details() {
        return `${this.name} - ${this.price}`;
    }
    format() {
        return `Menu item called ${this.name} and is $ ${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor() {
        super(...arguments);
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
    get toppingList() {
        return this.toppings.join(', ');
    }
}
let pizza = new Pizza('New York', 14.99);
let pizzaTwo = new Pizza('Margarita', 12.99);
pizza.changeBase('garlic');
pizza.addTopping('olives');
pizza.addTopping('peppers');
pizza.removeTopping('olives');
console.log(pizza);
const addMushroomsToPizzas = (pizzas) => {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
    }
};
addMushroomsToPizzas([pizza, pizzaTwo]);
console.log(pizza, pizzaTwo);
console.log(pizza.toppingList);
const printDetails = (item) => {
    console.log(item.details());
};
printDetails(pizzaTwo);
console.log(pizza.format());
