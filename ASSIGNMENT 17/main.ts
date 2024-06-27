let placeToVisit: string[] = ["paris", "italy", "london", "china", "australia"];
// print in original orde
console.log("original order:",  placeToVisit);
// print array in alphabatical order


console.log("alphabetical order:", placeToVisit.slice().sort());

// array is still in its original order
console.log("original order after sorting:",  placeToVisit);

// print array in reverse order without changing the order of the original list
console.log("Reverse alphabetical order:", placeToVisit.slice().sort().reverse());

// array is still in its original order
console.log("original order after reverse sorting: :",  placeToVisit);

// Reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:", placeToVisit);

// Reverse the order of list again
placeToVisit.reverse();
console.log("back to original order:", placeToVisit);

// Sort your array so it’s stored in alphabeƟcal order
console.log(" sorted in alphabetical order:", placeToVisit.slice().sort());

//Sort to change your array so it’s stored in reverse alphabeƟcal order
console.log("stored in Reverse alphabetical order:", placeToVisit.slice().sort().reverse());
