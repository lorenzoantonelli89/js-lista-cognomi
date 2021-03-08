// esercizio nomi e Cognomi

// esercizio provato con for

var surname = [];
var index = [];

for (var i = 0; i < 3; i++) {
  var info = prompt('Scrivi il tuo cognome');
  surname.push(info);
  index.push(i + 1);
  console.log(info);
}

console.log(surname.sort());
console.log(index);


// esercizio provato con while

// var surname = [];
// var index = [];
// var i = 0;
//
// while (i < 3) {
//   var info = prompt('Scrivi il tuo cognome');
//   surname.push(info);
//   index.push(i + 1);
//   i++;
//   console.log(info);
// }
//
// console.log(surname.sort());
// console.log(index);
