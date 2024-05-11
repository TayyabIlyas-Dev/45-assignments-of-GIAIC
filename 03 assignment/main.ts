// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myName:string = "Tayyab ilyas";

let lowercase:string = myName.toLowerCase();
let uppercase:string = myName.toUpperCase();

let stringToArray = myName.split('') // it converts string to array .
// now
let indexToChange = 7;
let digitToReplace = "I";

stringToArray[indexToChange] = digitToReplace; // this give me a capital I in my arry.
let arrayToString = stringToArray.join('') // it converts Array to string. 

let titlecase = arrayToString;

let answer = (`${titlecase}, This Name was written in TitleCase   \n ${uppercase}, This Name was written in UpperCase\n  ${lowercase}, This Name was written in LowerCase `)


console.log(answer,`\n              Task Completed`);
console.log();






