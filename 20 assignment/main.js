//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.
var anything = ['English', 'Urdu', 'Arbi', 'Bangoli', 'Spanish'];
console.log("            Language list:  ");
for (var i = 0; i < anything.length; i++) {
    console.log("\n    ".concat(i + 1, ") ").concat(anything[i], "\n    "));
}
