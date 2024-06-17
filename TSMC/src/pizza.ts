type Base = 'classic' | 'tick' | 'thin' | 'garlic'

class Pizza {
    constructor(private name: string, private price: number) { }

    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }

    changeBase(base: Base): void {
        this.base = base
    }
}

let pizza = new Pizza('New York', 14.99);

pizza.changeBase('garlic');
pizza.addTopping('olives');
pizza.addTopping('peppers');
pizza.removeTopping('olives')

console.log(pizza);