
/* Question 43:  Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let NamesOfMagician = ['joker','fakri','josha'];
let copyMagicians = [...NamesOfMagician]
function show_magicians(){for (let i = 0; i < NamesOfMagician.length; i++) 
  {
         console.log(NamesOfMagician[i]);
   }};


   // add  'The great' words in array.
let make_great = (great:string)=>{
let newArr =``;
for (let Names of  copyMagicians) {

  newArr += `${great} ${Names}\n` 
}
return newArr;
}


let greatMagicians = make_great(`The Great`);
let MakeArr = greatMagicians.split(`\n`).filter(name => name !== '');// .filter() was see from chatgpt  its remove ''.

console.log(`Orignal Names of Magicians`);
console.log(NamesOfMagician);


console.log(` Names of The Great Magicians`);
console.log(MakeArr);



// completed.


