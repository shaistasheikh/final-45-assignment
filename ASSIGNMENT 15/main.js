"use strict";
let guestList = ["Umer", "Zara", "Moon"];
console.log("Great news! we found a bigger table");
// unsift
guestList.unshift("Mohammad");
// splice
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
console.log(guestList);
//push
guestList.push("Hassan");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited for dinner.`);
});
