//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.


let anything:string[] =['English','Urdu','Arbi','Bangoli','Spanish'];
console.log(`            Language list:  `);

for(let i=0; i < anything.length; i++){
    

    console.log(`
    ${i +1}) ${anything[i]}
    `);
}

// completed..