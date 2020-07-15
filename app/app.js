// funzione senza argoenti

// saluta();
// saluta();
// saluta();

// ***funzioni******//
// function saluta (saluto) {
//     alert(saluto);
// }

// console.log(sommaNumeri (7,8));
// function sommaNumeri (num1, num2) {
//     var risultato = num1 + num2;
//     return risultato;
// }

// funzione area del rettangolo

// function areaRettangolo (base, altezza) {
//     return = base*altezza;
// }

// function areaRettangolo (base, altezza) {
//     var area = base*altezza;
//     return area;
// }
//
// // console.log(areaRettangolo (10,8));
//
// var area = areaRettangolo(10, 8);
//
// console.log(area);

// presi tre numeri e fare la media
// var mediaNumeri = media(1,2,3,);
// console.log(mediaNumeri);
//
//
// function media (num1, num2, num3) {
//
// return  (num1 + num2 + num3)/3
//
// }
//
//
    // funzione è un numero

//     function isNum(a) {
//     if (isNaN(a)) {
//         return false
//     }  else {
//         return true;
//     }
// } 

// // generare numeri casuali
//     console.log(numeroRandom(1,6));
//     console.log(numeroRandom(x,y));
//
//     var x = parseInt(prompt("inserire un numeroo"));
//     var x = parseInt(prompt("inserire un numeroo"));
//
//
// function numeroRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// generare 10 numeri random attraverso la funzione intervallo da 1 a 10
 //    var numero;
 //
 //
 //    for (var i = 0; i < 10; i++) {
 //        numero = numeroRandom (1,10);
 //        console.log(numero);
 //        document.getElementById('numeri').innerHTML += "<li> " + numero + "</li>";
 //    }
 //
 // function numeroRandom (min, max) {
 //     return Math.floor(Math.random() * (max - min + 1) ) + min;
 // }

// verificare attraverso una funzione se il numero passato dall'utente è pari o dispari

// var numero = parseInt(prompt("inserisci un nuemero"));

// if (numero % 2 == 0) {
//     console.log("e pari");
// } else {
//     console.log("e dispari");
// }

// console.log(pariODiapsri(numero));
// if (pariODiapsri(numero)) {
//     console.log("il numero è pari");
// } else {
//     console.log("il numero è dispari");
// }
//
//
//
// function pariODiapsri (n) {
//     if (n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
//
// }

// ESERCIZIO DI OGGI
// chiedere un parola
// memorizzarla in una variabile
// trovare la parola letta al contrario
// confrontate le due stringhe
// visualizzare il risultato
// alla fine fare la funzione

// CEARE UNA FUNZIONE CHE MANIPOLA UJA STRINGA ESTRAENDO LE LETTERE DI POSTO PARI MEMORIZZANDOLE IN UN'ALTRA STRINGA INZIALEMNTE VUOTA

// var nome = "Ciao";

// for (var i = 0; i < nome.length; i+=2) {
//     nomeVuoto = nomeVuoto + nome[i];
// }

// for (var i = 0; i < nome.length; i++) {
//     if(i % 2 == 0) {
//         // nomeVuoto = nomeVuoto + nome[i];
//         nomeVuoto += nome[i];
//
//
//     }
// }
//
// console.log(nomeVuoto);
// console.log(estraiStringa(nome));
// var risultato = estraiStringa(nome);
// console.log(risultato);
//
// var nome2 = "Oggi è una bela giornata"
// var risultato2 = estraiStringa(nome2);
// console.log(risultato2);
//
// function estraiStringa (str){
//     var nomeVuoto = " ";
//     for (var i = 0; i < str.length; i++) {
//         if(i % 2 == 0) {
//             // nomeVuoto = nomeVuoto + nome[i];
//             nomeVuoto += str[i];
//
//
//         }
//     }
//     return nomeVuoto;
// }

// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inerisci una parola");
// var parola2 = "";
// var risultato = "non palindromo";


// for (var i = parola.length -1; i >= 0; i--) {
//     // console.log(parola[i]);
//     parola2 += parola[i];
//     // console.log(parola2);
//
// }
// // per fare il check di tutta la parola if si mette fuori il cicolo for
// if (parola2 == parola) {
//     risultato = "palindromo";
//
//
// }
// console.log(risultato);
//
// test con la funzione


function palindromo (n) {
    var parola2 = "";
    var risultato = "non palindromo";
    for (var i = parola.length -1; i >= 0; i--) {
        parola2 += parola[i];
    }
    // per fare il check di tutta la parola if si mette fuori il cicolo for
    if (parola2 == parola) {
        risultato = "palindromo";
    }
    return risultato
}

console.log(palindromo(parola));
