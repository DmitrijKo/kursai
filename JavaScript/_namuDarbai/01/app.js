function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}



// UŽDUOTIS NR.1
// Didesnę reikšmę padalinkite iš mažesnės.
console.log('UŽDUOTIS NR.1');

var a = rand(0, 4);
var b = rand(0, 4);

console.log('SUGENERUOTI SKAIČIAI:', a, b);

var rez;

if ((b === 0 && a === 0) || a === 0 || b === 0) {
   console.log ('Dalinti iš 0 negalim!');
} else if (a >= b) {
   rez = a / b;
   console.log (a, '/', b, 'rezultatas:', rez);
} else {
   rez = b / a;
   console.log (b, '/', a, 'rezultatas:', rez);
}




// UŽDUOTIS NR.2
// Raskite kintąmąjį turintį vidurinę reikšmę.
console.log('UŽDUOTIS NR.2');

var a = rand(0, 25);
var b = rand(0, 25);
var c = rand(0, 25);

console.log('SUGENERUOTI SKAIČIAI:', a, b, c);

if (a > b && a < c || a < b && a > c) {
   console.log('VIDURINĖ REIKŠMĖ:', a)
} else if (b > a && b < c || b < a && b > c) {
   console.log('VIDURINĖ REIKŠMĖ:', b)
} else {
   console.log('VIDURINĖ REIKŠMĖ:', c)
}



// UŽDUOTIS NR.3
// Įvedami skaičiai -a, b, c –kraštinių ilgiai.
// Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį.
console.log('UŽDUOTIS NR.3');

var a = rand(1, 10);
var b = rand(1, 10);
var c = rand(1, 10);

console.log('SUGENERUOTI SKAIČIAI:', a, b, c);

if (a < b + c && b < c + a && c < a + b) {
   console.log('GALIMA SUDARYTI TRIKAMPĮ');
} else {
   console.log('TRIKAMPIO SUDARYTI NEGALIMA');
}



// UŽDUOTIS NR.4
// Sukurkite keturis kintamuosius ir sugeneruokite jiems reikšmes nuo 0 iki 2.
// Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
console.log('UŽDUOTIS NR.4');


//var a = rand(0, 2);
//var b = rand(0, 2);
//var c = rand(0, 2);
//var d = rand(0, 2);

//console.log('SUGENERUOTI SKAIČIAI:', a, b, c, d);

//if () {

//}

//console.log('0 yra:', ,'1 yra:', ,'2 yra:', );


// UŽDUOTIS NR.5
// Atspausdinkite 3 skaičius nuo -10 iki 10. 
// Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,
//  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, 
// o prie 0 “*” simbolius
console.log('UŽDUOTIS NR.5');

var pirmas = rand(-10, 10);
var antras = rand(-10, 10);
var trecias = rand(-10, 10);

if (pirmas < 0) {
   pirmas = '+' + pirmas + '+';
} else if (pirmas > 0) {
   pirmas = '-' + pirmas + '-';
} else {
   pirmas = '*' + pirmas + '*';
}

if (antras < 0) {
   antras = '+' + antras + '+';
} else if (antras > 0) {
   antras = '-' + antras + '-';
} else {
   antras = '*' + antras + '*';
}

if (trecias < 0) {
   trecias = '+' + trecias + '+';
} else if (trecias > 0) {
   trecias = '-' + trecias + '-';
} else {
   trecias = '*' + trecias + '*';
}

console.log(pirmas, antras, trecias);



// UŽDUOTIS NR.6 
// Įmonė parduoda žvakes po 1 EUR. 
//Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuris skaičiuos žvakių kainą,
// kiek žvakių ir kokia kaina perkama.
console.log('UŽDUOTIS NR.6');

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



// UŽDUOTIS NR.7
// Paskaičiuokite jų aritmetinį vidurkį. 
//Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90.
// Abu vidurkius atspausdinkite.
console.log('UŽDUOTIS NR.7');

var a = rand(0, 100);
var b = rand(0, 100);
var c = rand(0, 100);

console.log('SUGENERUOTI SKAIČIAI:', a, b, c);

var aritVid = (a + b + c) / 3;
var aritVid1090;

console.log('PIRMAS ARITMETINIS VIDURKIS YRA:', aritVid);

if ((a < 10 || a > 90) && (b > 10 || b < 90) && (c > 10 || c < 90 )) {
   aritVid1090 = (b + c) / 2;
} else if ((b < 10 || b > 90) && (a > 10 || a < 90) && (c > 10 || c < 90)) {
   aritVid1090 = (a + c) / 2;
} else if ((c < 10 || c > 90) && (a > 10 || a < 90) && (b > 10 || b < 90)) {
   aritVid1090 = (a + b) / 2;
} else {
   aritVid1090 = (a + b + c) / 3;
}

console.log('ANTRAS ARITMETINIS VIDURKIS YRA:', aritVid1090);