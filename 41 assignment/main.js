// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
var NamesOfMagician = ['joker', 'fakri', 'josha'];
// let show_magicians =(magician:string[])=>{
//   NamesOfMagician.forEach(magician => {
//     console.log(magician);
//   });
// }
// let show_magicians =()=> {for (let i = 0; i < NamesOfMagician.length; i++) {
// console.log(NamesOfMagician[i]);
// }
// }
// show_magicians();
// completed.
var magicians = ["Junaid", "Raees", "Asim", "Qamar", "Muneer"];
function show_magicians() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var Names = magicians_1[_i];
        console.log(Names);
    }
}
;
show_magicians(); // calling function
show_magicians();
