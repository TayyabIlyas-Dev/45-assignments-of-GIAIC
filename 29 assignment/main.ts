
let favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// Check for certain fruits 
                                            // i can use .include() method but its not working in ts but works in js
                                            // so compile shows error but u can ignore it 
                                            // node js can not throw error
if (favorite_fruits.includes('apple')) {
    console.log("You  like apples!");
}
else{
    console.log(`fruit are not available`); 
    
}

if (favorite_fruits.includes('banana')) {
    console.log("You  like bananas!");
}
else{
    console.log(`fruit are not available`);
    
}

if (favorite_fruits.includes('orange')) {
    console.log("You  like oranges!");
}
else{
    console.log(`fruit are not available`);
    
}

if (favorite_fruits.includes('grape')) {
    console.log("You  like grapes!");
}
else{
    console.log(`fruit are not available`);
    
}

if (favorite_fruits.includes('kiwi')) {
    console.log("You  like kiwis!");
}
else{
    console.log(`fruit are not available`);
    
}

// completed.
