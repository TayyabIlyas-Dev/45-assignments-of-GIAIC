

// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let NamesOfMagician = ['joker','fakri','josha'];

let show_magicians =()=> {for (let i = 0; i < NamesOfMagician.length; i++) 
  {
         console.log(NamesOfMagician[i]);
   }};


   // add  'The great' words in array.
let make_great = ()=>{
 for (let i = 0; i < NamesOfMagician.length; i++) {
    NamesOfMagician[i] = `The Great ${NamesOfMagician[i]}!`
    console.log(NamesOfMagician[i]);
    
  }
}
console.log(`Simple Names of Magicians`);

show_magicians();
console.log(` Names of The Great Magicians`);

make_great()

// completed.


