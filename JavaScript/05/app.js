



function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

///



/// UŽDUOTIS NR. 1

var a = 5;
var b = 10;
var c = 15;

/// A.
var rez;
rez = a + b + c;
console.log(rez);

/// B.
var string = String(a) + String(b) + String(c);
console.log(string);

/// C.
rez = a + ' ' + b + ' ' + c;
console.log(rez);

/// D.
var rezultatas = a + b + c;
rez = rez + ' ' + 'REZULTATAS:' + rezultatas;
console.log(rez);


/// UŽDUOTIS NR. 2
console.log('--------2-------');
var random = rand(5, 10);
console.log(random);

/// UŽDUOTIS NR. 3
console.log('--------3-------');
var a = 'Labas'
for(var i = 1; i <= 5; i++) {
   console.log(a);
}

/// UŽDUOTIS NR. 4
console.log('--------4-------');
for(var i = 1; i <= 7; i++) {
   console.log(random);
}

/// UŽDUOTIS NR. 5
console.log('--------5-------');
for(var i = 1; i <= random; i++) {
   console.log(random);
}

/// UŽDUOTIS NR. 6
console.log('--------6-------');
if(random >= 7) {
   for(var i = 1; i <= random; i++) {
      console.log(random);
   }
}

/// UŽDUOTIS NR. 7

/// A.
console.log('--------7A-------');

var a;
for(var i = 1; i <= 5; i++) {
   a = rand(10, 20);
   console.log(a);
}

/// B.
console.log('--------7B-------');

var kibiras = 0;
for(var i = 1; i <= 5; i++) {
   a = rand(10, 20);
   kibiras = kibiras + a;
}
console.log(kibiras);

/// C.
console.log('--------7C-------');

var string = '';
for(var i = 1; i <= 5; i++) {
   a = rand(10, 20);
   string = string + String(a) + ' ';
}
console.log(string);

/// D.
console.log('--------7D-------');

var string1 = '';
var kibiras2 = 0;
for(var i = 1; i <= 5; i++) {
   b = rand(10, 20);
   string1 = string1 + String(b) + ' ';
   kibiras2 = kibiras2 + b;
}
console.log(string1, kibiras2);

/// UŽDUOTIS NR. 8

/// A.
console.log('--------8A-------');

var c;
do{
   c = rand(10, 25);
   console.log(c);
} while(c >= 12);

/// B.
console.log('--------8B-------');

var c;
var i = 0;
do{
   c = rand(10, 25);
   console.log(c);
   i++;
} while(c >= 12);
console.log('ITERACIJŲ SKAIČIUS:', i);

/// C.
console.log('--------8C-------');

var c;
var i = 0;
do{
   c = rand(10, 25);
   if (c <= 18){
      i = i + c;
   }
   console.log(c);
} while(c >= 12);
console.log('GENERUOJAMŲ REIKŠMIŲ SUMA:', i);

/// D.
console.log('--------8D-------');

var c;
var i = 0;
var f = 0;
do{
   c = rand(10, 25);
   if (c <= 18){
      i = i + c;
   } else {
      f = f + 1;
   }
   console.log(c);
} while(c >= 12);
console.log('GENERUOJAMŲ REIKŠMIŲ SUMA:', i);
console.log('ATMESTŲ REIKŠMIŲ KIEKIS:', f);


/// E.
console.log('--------8E-------');

var c;
var i = 0;
var f = 0;
do{
   c = rand(10, 25);
   console.log(c);
   if(c % 2 === 0) {
      i++;
   } else {
      f++
   }
} while(c >= 12);
console.log('LYGINIŲ SKAIČIŲ KIEKIS:', i);
console.log('NELYGINIŲ SKAIČIŲ KIEKIS:', f);

/// F.
console.log('--------8F-------');

var c;
var i = 0;
var countSmall;
var countBig = 0;

do{
countSmall = 0;
   do{
      c = rand(10, 25);
      countSmall++;
   } while(c >= 12);

countBig++;
} while(countSmall < 20);

console.log(countBig);



/// UŽDUOTIS NR. 9

/// A.
console.log('--------9A-------');

var a;
var didelis = 0;
var mazas = 0;
do{
   a = rand(5, 10)
   for(var i = 1; i <= a; i++) {
      mazas++;
   }
   didelis++;
   console.log(a);
} while (a != 5);
console.log('IŠORINIO CIKLO ITERACIJŲ KIEKIS:', didelis);
console.log('VIDINIO CIKLO ITERACIJŲ KIEKIS:', mazas);


/// B.
console.log('--------9B-------');

var a;
var didelis = 0;
var count = 0;
do{
   a = rand(5, 10)
   if(a === 5) {
      count++
   }
   didelis++;
   console.log(a);
} while (count < 3 );
console.log('ITERACIJŲ KIEKIS:', didelis);

/// C.
console.log('--------9C-------');

var a;
var didelis = 0;
var count = 0;
do{
   a = rand(5, 10)
   if(a === 5) {
      count++
   } else {
      count = 0
   }
   didelis++;
   console.log(a);
} while (count < 3 );
console.log('ITERACIJŲ KIEKIS:', didelis);



/// UŽDUOTIS NR. 10
console.log('--------10-------');

