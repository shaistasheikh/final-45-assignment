let userNames = ["Ali","Ayesha","Admin","Rubaisha","Asim"]

userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see status report?`);
    }else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }

    }
)