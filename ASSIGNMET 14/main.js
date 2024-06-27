"use strict";
let guestList = ["Jazib", "Umer", "Zara"];
//print the name who is not invited for dinner
let unableAttend = guestList.splice(0, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
// push
guestList.push("Moon");
// print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
