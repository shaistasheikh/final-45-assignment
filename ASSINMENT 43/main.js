"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwitch with the following items: \n ");
    items.forEach(singleitem => console.log(singleitem));
    console.log("Now Enjoy sandwitch");
}
makeSandwich("Bread", "Butter");
makeSandwich("Chicken", "cheese", "Egg");
makeSandwich("Bread", "Butter", "Chicken", "Tomato", "cheese", "Egg", "Mayo");
