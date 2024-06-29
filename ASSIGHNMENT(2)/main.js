"use strict";
//storing a person name in a variable
let personName = "Shaista Sheikh";
//printing a person name in a lowercase
console.log("Lowercase", personName.toLowerCase());
//printing a person name in a uppercase
console.log("Uppercase", personName.toUpperCase());
//printing a person name in  titlecase
console.log("Titlecase: ", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
