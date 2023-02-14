#!/usr/bin/env node
/* builtin functions */

let stringOne = "hElLo";

stringOneLower = stringOne.toLowerCase();

console.log(stringOneLower);
console.log(stringOne.toUpperCase());

let numberOne = 5.1;

console.log(Math.floor(numberOne));
console.log(Math.ceil(numberOne));

let stringTwo = numberOne.toString();
console.log(stringTwo);
console.log(typeof(stringTwo));

let num2 = 23;

// convert to binary
let bin1 = num2.toString(2);
console.log(bin1);

// convert to octal
let oct1 = num2.toString(8);
console.log(oct1);

// convert to hexadecimal
let hex1 = num2.toString(16);
console.log(hex1);

let num3 = 166;
console.log(num3.toString(16));

// substract text from a given position to a final position using index number in both positions

let randomText = "Hello everybody!"

console.log(randomText.substring(11, 15));