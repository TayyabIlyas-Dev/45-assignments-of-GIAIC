// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
var guestList = ["Tayyab", "Imran", "Taha"];
//  invitation messages
console.log("Dear " + guestList[0] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[1] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[2] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
// the who cn't make it with  dinner.
console.log("Mr " + guestList[1] + " Can't come  in dinner because of Strike.");
// replace the name width cannot come in dinner
guestList[1] = "Abdullah";
console.log("\nInvitations for the updated guest list:");
console.log("Dear " + guestList[0] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[1] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[2] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("\tTask Completed");
