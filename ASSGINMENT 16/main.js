"use strict";
let guestlist = ["zara", "Umer", "Moon", "Mohammad", "Hassan", "Ali"];
// print message
console.log("unfortunately! the new dinner table won't arrive so we can invite only two guest");
// Remove guest from the list
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    if (removeguest !== undefined) {
        console.log(`Sorry ${removeguest}, we can't invite you.`);
    }
}
// Print a message to each of the two people still on your list, leƫng them know they’re still invited.
guestlist.forEach(guest => {
    console.log(`Dear ${guest},you are still invited for the dinner `);
});
// remove last two names from the list
guestlist.splice(0, guestlist.length);
// print updated empty list
console.log("Updated list og guests:", guestlist);
