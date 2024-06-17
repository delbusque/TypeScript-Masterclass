interface Person{
    name: string,
    age: number
}

let greet = (person: Person): void =>{
    console.log(`${person.name} is ${person.age} years old...`);
    
}

const person = {
    name: 'Ivan',
    age: 33
}

greet(person);