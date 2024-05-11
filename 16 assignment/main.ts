// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

     /*      ¬¬¬¬¬¬¬¬************************************¬¬¬¬¬¬¬¬¬¬¬    */

// It is previous Exercise 15 code new code Starts in The middle Of aall Code..


let guestList = ["Tayyab", "Imran", "Taha"];



      /*      ¬¬¬¬¬¬¬¬************************************¬¬¬¬¬¬¬¬¬¬¬    */

//  EXERCISE 16 Starts here....

        console.log("Everyone I am very Happy to informig You I have  found a bigger dinner table. so Iam inviting More Friends");

        

        // now add one more friend in end of array so we use .push() method

        guestList.push("Saba");

        // now we add one more friend in start of array for use of  .unshift()
        guestList.unshift("Emman");


        
        //.splice add a thing in middle of array it takes 3 values 1st is index which to start 2nd to delete thing if 2nd is 0 then it cannot delete any thing 3rd the value u adding. simple.
        guestList.splice(2,0,"Ahmed");
        


        // we can use for loop for print all invitation to everyone.
        for( let i =0; i < guestList.length; i++){
          console.log(`Dear ${guestList[i]}  you are cordially invited to dinner this sunday. We would be honored to have your presence.`);
          
        }
       
        
        