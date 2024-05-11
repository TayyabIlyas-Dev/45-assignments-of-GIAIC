/* Question 43:  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var NamesOfMagician = ['joker', 'fakri', 'josha'];
var copyMagicians = __spreadArray([], NamesOfMagician, true);
function show_magicians() {
    for (var i = 0; i < NamesOfMagician.length; i++) {
        console.log(NamesOfMagician[i]);
    }
}
;
// add  'The great' words in array.
var make_great = function (great) {
    var newArr = "";
    for (var _i = 0, copyMagicians_1 = copyMagicians; _i < copyMagicians_1.length; _i++) {
        var Names = copyMagicians_1[_i];
        newArr += "".concat(great, " ").concat(Names, "\n");
    }
    return newArr;
};
var greatMagicians = make_great("The Great");
var MakeArr = greatMagicians.split("\n").filter(function (name) { return name !== ''; }); // .filter() was see from chatgpt  its remove ''.
console.log("Orignal Names of Magicians");
console.log(NamesOfMagician);
console.log(" Names of The Great Magicians");
console.log(MakeArr);
// completed.
