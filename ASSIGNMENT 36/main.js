"use strict";
function make_shirt(size = "Large", printMessage = "I love typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love javascipt");
