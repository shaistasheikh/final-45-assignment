//creating a variable

let age = 24;

// if the person is less than 2 years old, print a message that the person is a baby.
if (age < 2){
    console.log("you are a baby");
}

// if the person is at least 2 years old but less than 4, print message that the person
else if(age >= 2 && age < 4) {
    console.log("you are a toddler");
}

// if the person is at least 4 years old but less than 13, print message that the person is a kid.
else if(age >= 4 && age < 13) {
    console.log("you are a kid");
}
// if the person is at least 13 years old but less than 20, print message that the person is a teenager.

else if(age >= 13 && age < 20) {
    console.log("you are a teenager");

}

// if the person is at least 20 years old but less than 65, print message that the person is a young adult.

else if(age >= 20 && age < 65) {
    console.log("you are an adult");

}

// if the person is age 65 or older, print message that the person is an elder.
else if(age >= 65) {
    console.log("you are an elder");

}