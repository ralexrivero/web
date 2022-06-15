#!/usr/bin/env node

/* functions */

function greet(name, surname, honorific, salutation) {
    return `${salutation} ${honorific} ${name} ${surname} pleased to meet you`
}

console.log(greet("Ronald", "Rivero", "Mr.", "Hi!")) // call the function and console.log the returned value
