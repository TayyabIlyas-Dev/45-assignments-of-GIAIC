// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var locations = ["Paris", "Tokyo", "New York", "Sydney", "London", "Beijing"];
console.log(locations);
// make a copy of arry
var copyArr = locations.slice();
// Alphabatic order 
var sortedArr = copyArr.slice(); // .sort to array will be sorted //.join(", ")  it add a space in every Comaas.
var sortedArrAns = copyArr.sort().join(", ");
console.log("\nAlphabetic order:\n".concat(sortedArrAns));
// orignal arry
console.log("\nOrignal Array:\n".concat(locations));
// reverse aphabetic order
var reverseArr = locations.reverse().join(", "); // .reverse() will sorted into reverse alphabatic oreder.
console.log("\nReverse Alphabetic order:\n".concat(reverseArr));
// again reverse  arry
var againReverseArr = locations.reverse().join(", "); // .reverse() will sorted into reverse alphabatic oreder.
console.log("\nAgain Reverse Alphabetic order:\n".concat(againReverseArr));
// orignal arry
console.log("\nOrignal Array:\n".concat(locations.join(", ")));
// sorted arry
var sorting = locations.sort();
console.log("\nsorted Alphabetic order:\n".concat(sorting));
// reverse sorted arry
var reversesorting = locations.reverse();
console.log("\nsorted Alphabetic order:\n".concat(reversesorting));
