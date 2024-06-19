type Base = 'classic' | 'tick' | 'thin' | 'garlic'

interface hasFormater {
    format(): string
}

class MenuItem implements hasFormater {
    constructor(private name: string, private price: number) { }

    details(): string {
        return `${this.name} - ${this.price}`
    }

    format(): string {
        return `Menu item called ${this.name} and is $ ${this.price}`
    }
}

class Pizza extends MenuItem {

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

    get toppingList(): string {
        return this.toppings.join(', ')
    }
}

let pizza = new Pizza('New York', 14.99);
let pizzaTwo = new Pizza('Margarita', 12.99);

pizza.changeBase('garlic');
pizza.addTopping('olives');
pizza.addTopping('peppers');
pizza.removeTopping('olives')

console.log(pizza);

const addMushroomsToPizzas = (pizzas: Pizza[]) => {
    for (const p of pizzas) {
        p.addTopping('mushrooms')
    }
}

addMushroomsToPizzas([pizza, pizzaTwo])

console.log(pizza, pizzaTwo);
console.log(pizza.toppingList);


const printDetails = (item: MenuItem) => {
    console.log(item.details());
}
printDetails(pizzaTwo)

console.log(pizza.format());
