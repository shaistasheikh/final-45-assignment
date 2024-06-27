"use strict";
let current_users = ["Ali", "osama", "Bilal", "sana", "Rehana"];
let new_users = ["Ayesha", "Asim", "Osama", "Salman", "Sana"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`sorry ${new_one_user} is aready taken!`);
    }
    else
        console.log(`This Username ${new_one_user} is available`);
});
