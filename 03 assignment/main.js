// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "Tayyab ilyas";
var lowercase = myName.toLowerCase();
var uppercase = myName.toUpperCase();
var stringToArray = myName.split(''); // it converts string to array .
// now
var indexToChange = 7;
var digitToReplace = "I";
stringToArray[indexToChange] = digitToReplace; // this give me a capital I in my arry.
var arrayToString = stringToArray.join(''); // it converts Array to string. 
var titlecase = arrayToString;
var answer = ("".concat(titlecase, ", This Name was written in TitleCase   \n ").concat(uppercase, ", This Name was written in UpperCase\n  ").concat(lowercase, ", This Name was written in LowerCase "));
console.log(answer, "\n              Task Completed");
console.log();
