
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Tests for equality  
let fruit:string = 'banana';
console.log("Is fruit equal to 'banana'? I predict True.");
console.log(fruit == 'banana');

// Tests for inequality with strings

console.log("Is fruit not equal to 'orange'? I predict True.");
console.log(fruit != 'orange');

// Tests using the lower case function
let color = 'Red';
color = color.toLowerCase()
console.log("Is color equal to 'red' (case insensitive)? I predict True.");
console.log(color == 'red');

// Numerical tests
let a = 5;
let y = 10;

console.log("Is a equal to y? I predict False.");
console.log(a == y);

console.log("Is a not equal to y? I predict True.");
console.log(a != y);

console.log("Is a greater than y? I predict False.");
console.log(a > y);

console.log("Is a less than y? I predict True.");
console.log(a < y);

console.log("Is a greater than or equal to y? I predict False.");
console.log(a >= y);

console.log("Is a less than or equal to y? I predict True.");
console.log(a <= y);

// Tests using && and || operators
let temperature = 21;
let is_cloudy = true;
let is_sunny = false

console.log("Is the temperature greater than 20 and is it cloudy? I predict True.");
console.log(temperature > 20 && is_cloudy);

console.log("Is the temperature less than 15 or is it not sunny? I predict false.");
console.log(temperature < 15 || is_sunny);

// Test whether an item is in an array
let fruits:any = ['apple', 'grapes', 'orange'];
console.log("Is this fruits array? I predict True.");
console.log(Array.isArray(fruits));

// Test whether an item is not in an array
fruits = "banana";
console.log("Is this not an array? I predict false.");
console.log(Array.isArray(fruits));



// completed..