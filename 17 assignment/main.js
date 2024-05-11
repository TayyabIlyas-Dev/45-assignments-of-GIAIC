var guestlist = ["Emman", "Tayyab", "Imran", "Abdullah", "Taha", "Saba"];
console.log("Table won't arrived in time that's why I can invite only two people for dinner\n");
var guest1 = guestlist.pop();
console.log("Sorry Mr ".concat(guest1, " you are not invited!"));
var guest2 = guestlist.pop();
console.log("Sorry Mr ".concat(guest2, " you are not invited!"));
var guest3 = guestlist.pop();
console.log("Sorry Mr ".concat(guest3, " you are not invited!"));
var guest4 = guestlist.pop();
console.log("Sorry Mr ".concat(guest4, " you are not invited!"));
for (var i = 0; i < guestlist.length; i++)
    (console.log("Mr. ".concat(guestlist[i], " you are still invited")));
guestlist.pop();
guestlist.pop();
console.log(guestlist);
