// esercizio nomi e Cognomi

var surnameUser = prompt('Scrivi il tuo cognome');
var surnameList = ['Venti', 'Scalvini', 'Alessi', 'Chiefa', 'Masnada'];
surnameList.push(surnameUser);

console.log(surnameList);
console.log('Il tuo cognome: ' + surnameUser);
console.log(surnameList.sort());

// variante con ciclo for

for (var i = 0; i < surnameList.length; i++) {
  var surnamePosition = surnameList[i];
  if (surnamePosition == surnameUser) {
    console.log('La posizione del tuo cognome è : ' + (i + 1));
    break;
  }
}

// variante con ciclo while

// var surnamePosition = 0;
// while (surnameList[surnamePosition] != surnameUser) {
//   surnamePosition++;
// }
// console.log('La posizione del tuo cognome è : ' + (surnamePosition + 1));
