// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = '      Jaun Elia✍️';
var quote = "     \u201CTum jab aaogi to khoya hua paogi mujhe\n     Meri tanhaai mein khwabon ke siwa kuch bhi nahi\n     Mere kamre ko sajane ki tamanna hai tumhein,\n     Mere kamre mein kitaabon ke siwa kuch bhi nahi\n\n     In kitaabon ne bada zulm kiya hai mujh par,\n     In mein ek ramz hai jis ramz ka mara hua zehan\n     Mushday-e-ishrat-e-anjaam nahi pa sakta,\n     Zindagi mein kabhi araam nahi pa sakta...\u201D";
var message = "\t ".concat(famous_person, "\n").concat(quote);
console.log(message);
