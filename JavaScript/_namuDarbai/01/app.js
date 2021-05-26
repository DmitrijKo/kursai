function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}



// UŽDUOTIS NR.1

var kint1 = rand(0, 4);
var kint2 = rand(0, 4);

var rez;

if (kint1 >= kint2) {
   rez = kint1 / kint2;
   console.log (kint1, '/', kint2, 'rezultatas =', rez);
}  else {
   rez = kint2 / kint1;
   console.log (kint2, '/', kint1, 'rezultatas =', rez);
}




// UŽDUOTIS NR.2

//var kint1 = rand(0, 25);
//var kint2 = rand(0, 25);
//var kint3 = rand(0, 25);

//var sum;

//if () {

//} else {

//}



// UŽDUOTIS NR.5

var pirmas = rand(-10, 10);
var antras = rand(-10, 10);
var trecias = rand(-10, 10);

if (pirmas < 0) {
   console.log('+', pirmas, '+');
} else if (pirmas > 0) {
   console.log('-', pirmas, '-');
} else {
   console.log('*', pirmas, '*');
}

if (antras < 0) {
   console.log('+', antras, '+');
} else if (antras > 0) {
   console.log('-', antras, '-');
} else {
   console.log('*', antras, '*');
}

if (trecias < 0) {
   console.log('+', trecias, '+');
} else if (trecias > 0) {
   console.log('-', trecias, '-');
} else {
   console.log('*', trecias, '*');
}



// UŽDUOTIS NR.6 

var kiekis = rand(5, 3000);

if (kiekis >= 2000) {
   nuolaida = "4%"
   suma = kiekis - (kiekis * 0.04);
   kaina = (kiekis - (kiekis * 0.04)) / kiekis;
} else if (kiekis >= 1000) {
   nuolaida = "3%"
   suma = kiekis - (kiekis * 0.03);
   kaina = (kiekis - (kiekis * 0.03)) / kiekis;
} else {
   nuolaida = "nuolaida netaikoma"
   suma = kiekis;
   kaina = kiekis / kiekis;
}
console.log('ŽVAKĖS KAINA: 1 Eur');
console.log('KIEKIS:', kiekis, 'vnt'); 
console.log('NUOLAIDA:', nuolaida);
console.log('ŽVAKĖS KAINA PO NUOLAIDOS:', kaina, 'Eur');
console.log('SUMA PO NUOLAIDOS:', suma, 'Eur');