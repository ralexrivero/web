#!/usr/bin/env node
/* objects */

const person = {
    name: "Ronald",
    surname: "Rivero",
    age: 41,
    country: "Uruguay",
    city: "Montevideo"
};

console.log(person)
console.log(person.name)

console.log("\nfor in\n**********************\n")
for (key in person) {
    console.log(key)
}

for (key in person) {
    console.log(person[key])
}
console.log("\nend for in\n**********************\n")

const dog = {
    name: "Spike",
    speak() {
        console.log("woof, woof!")
    }
};

dog.speak();
console.log(dog.name);

console.log(dog)

console.log('\n********************************************\n')
const me = {
    name: {
        first: "Ronald",
        second: "Alexander",
        last: "Rivero"
    },
    address: {
        street: "Hector Miranda 2424",
        city: "Montevideo",
        country: "Uruguay",
        zip: 11300
    },
    organization: null,
    student: true,
    stack: {
        language1: "C",
        language2: "Python",
        language3: "JavaScript"
    },
    getName() {
        return `${this.name.first} ${this.name.second} ${this.name.last}`
    },
    getAddress() {
        return `${this.address.street}\n${this.address.city}\n${this.address.country}\n${this.address.zip}`
    }
};

console.log(me.getName());
console.log("Address:\n" + me.getAddress());
console.log(me);

console.log("\nfor in\n*******************\n")
for (key in me) {
    console.log(me[key])
}