// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//  guest list
var guestList = ["Tayyab", "Imran", "Taha"];
//  invitation messages
// console.log("Dear " + guestList[0] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
// console.log("Dear " + guestList[1] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
// console.log("Dear " + guestList[2] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
// scond Method
for (var i = 0; i < guestList.length; i++) {
    console.log("Mr. ".concat(guestList[i], "! you are cordially invited to dinner this sunday. We would be honored to have your presence."));
}
;
