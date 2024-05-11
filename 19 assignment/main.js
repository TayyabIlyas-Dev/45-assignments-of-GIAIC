/* Question 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are
inviting to dinner.
*/
var guestList = ["Ali", "Talha", "Naeeb", "john", "tayyab", "taha"];
console.log("In sunday I am Inviting ".concat(guestList.length, " friends for a dinner!\nhere's the name:"));
for (var i = 0; i < guestList.length; i++) {
    console.log("".concat(guestList[i]));
}
