interface Person {
    name: string,
    age: number
}

interface User extends Person {
    email: string,
    greet: () => string
}

type Vehicle = {
    id: string | number,
    year: number
}

type Car = Vehicle & {
    manufacturer: string,
    model: string
    report(): string
}

const ford: Car = {
    id: 1,
    year: 1988,
    manufacturer: 'Ford',
    model: 'Focus',
    report(): string {
        return `${this.id} ${this.model}`
    }
}

let greet = (person: Person): void => {
    console.log(`${person.name} is ${person.age} years old..`);
}

const person = {
    name: 'Ivan',
    age: 33,
    email: 'hi@hi.com',
    greet(): string {
        return `${this.name} is ${person.age} years old... @ ${this.email}`
    }
}

console.log(person.greet());

greet(person)

console.log(ford.report());
