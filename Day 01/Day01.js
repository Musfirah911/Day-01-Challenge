"use strict";
//Store a person’s myName in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let myName = "Musfirah Tabassum";
console.log(`Hello ${myName}! How are you? Would you like to learn some Typescript today?`);
//Store a person’s myName in a variable, and then print that person’s myName in lowercase, uppercase, and titlecase.
//lowercase
console.log(myName.toLowerCase());
//uppercase
console.log(myName.toUpperCase());
//titlecase
console.log(myName.replace(/\b\w/g, c => c.toUpperCase()));
