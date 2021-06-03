function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}



// UŽDAVINYS Nr.1
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25
console.log('UŽDAVINYS Nr.1');

var arr = [];

for (var i = 0; i < 30; i++) {
   arr.push(rand(5, 25));
}
console.log(arr.slice());



// UŽDAVINYS Nr.2a
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log('UŽDAVINYS Nr.2a');

console.log(arr);
var sum = 0;

for (var i = 0; i < arr.length; i++) {
   if (arr[i] > 10) {
      sum++;
   }
}
console.log('Masyve reikšmių didesnių už 10 yra:', sum);



// UŽDAVINYS Nr.2b
// Raskite didžiausią masyvo reikšmę ir jos indeksus
console.log('UŽDAVINYS Nr.2b');

console.log(arr);

let did = 5;
let didIndex = [];

for (var i = 0; i < arr.length; i++) {
   if (arr[i] > did) {
      did = arr[i];
      didIndex = []; // masyvo isvalymas
   }
   if (arr[i] === did) {
      didIndex.push(i);
   }
}

console.log('Didžiausią masyvo reikšmę yra:', did);
console.log('Jų indeksai yra:', didIndex);


// UŽDAVINYS Nr.2c
// Suskaičiuokite visų lyginių indeksų reikšmių sumą
console.log('UŽDAVINYS Nr.2c');

console.log(arr);
var sum = 0;

for (var i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      sum += arr[i];
   }
}

console.log('Porinių indeksų reikšmių sumą yra:', sum);


// UŽDAVINYS Nr.2d
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas
console.log('UŽDAVINYS Nr.2d');

var arr1 = [];

for (var i = 0; i < arr.length; i++) {
   arr1.push(arr[i] - i);
}

console.log('Seno masyvo reiksmes:', arr);
console.log('Naujo masyvo reiksmes:', arr1);


// UŽDAVINYS Nr.2e
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, 
// kad bendras masyvas padidėtų iki indekso 39
console.log('UŽDAVINYS Nr.2e');

console.log('Senas masyvas:', arr);

for (var i = 40; arr.length < 40; i++) {
   arr.push(rand(5, 25));
}

console.log('Naujas masyvas:', arr);


// UŽDAVINYS Nr.2f
// Iš masyvo elementų sukurkite du naujus masyvus. 
// Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių
console.log('UŽDAVINYS Nr.2f');

console.log('Senas masyvas:', arr);

var arr1 = [];
var arr2 = [];

for (var i = 0; i < arr.length; i++) {
   if (i % 2) {
      arr1.push(arr[i]);
   } else {
      arr2.push(arr[i]);
   }
}

console.log('Naujas masyvas iš neporinių indekso reikšmių', arr1)
console.log('Naujas masyvas iš porinių indekso reikšmių', arr2)


// UŽDAVINYS Nr.2g
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15
console.log('UŽDAVINYS Nr.2g');

console.log('Pirminis masyvas:', arr);

for (var i = 0; i < arr.length; i++) {
   if (!(i % 2) && (arr[i] > 15)) {
      arr[i] = 0;
   }
}
console.log('Masyvas po pakeitimų:', arr);


// UŽDAVINYS Nr.2h
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
console.log('UŽDAVINYS Nr.2h');

console.log('Masyvas:', arr);

let index1 = -1;
let ii = 0;

do {
   if (arr[ii] > 10) {
      index1 = ii;
   }
   ii++;
} while (index1 === -1 && ii < arr.length);

console.log('Pirmas indeksas, kurio elemento reikšmė didesnė už 10 yra:', index1);



// UŽDAVINYS Nr.2i
// Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;
console.log('UŽDAVINYS Nr.2i');

console.log('Senas masyvas:', arr);

for (var i = 0; i < arr.length; i++) {
   arr.splice(i, 1);
}

console.log('Naujas masyvas:', arr);



// UŽDAVINYS Nr.3
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. 
// Suskaičiuokite kiek yra kiekvienos raidės.
console.log('UŽDAVINYS Nr.3');

const abcd = ['A', 'B', 'C', 'D'];

const arr3 = [];

for (let i = 0; i < 200; i++) {
    arr3.push(abcd[rand(0, 3)]);
}

console.log('Sugeneruotas masyvas iš raidžių yra:', arr3.slice());

const counter = [0, 0, 0, 0];

for (let i = 0; i < arr3.length; i++) {
   let index = abcd.indexOf(arr3[i]);
    counter[index]++;
}

let a = counter[0];
let b = counter[1];
let c = counter[2];
let d = counter[3];

console.log('A raidžių yra:', a);
console.log('B raidžių yra:', b);
console.log('C raidžių yra:', c);
console.log('D raidžių yra:', d);



// UŽDAVINYS Nr.4
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. 
// Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
// Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

//const abcd = ['A', 'B', 'C', 'D'];
//const masyvai = [ [], [], [] ];
//const triraidis = [];
//const uniValue = [];
//const uniComb = [];

//for (let j = 0; j < 3; j++) {
//    for (let i = 0; i < 20; i++) {
//        masyvai[j].push(abcd[rand(0, 3)]);
//    }
//}

//for (let i = 0; i < 20; i++) {
//    triraidis.push(masyvai[0][i]+masyvai[1][i]+masyvai[2][i]);
//}

//top: for (let i = 0; i < triraidis.length; i++) {

//    // Unikali
//    if (uniComb.indexOf(triraidis[i]) === -1) {
//        uniComb.push(triraidis[i]);
//    }

//    // Vienetine
//    let now = triraidis[i];
//    let counter = 0;
//    for (let j = 0; j < triraidis.length; j++) {
//        if (triraidis[j] === now) {
//            counter++;
//            if (counter > 1) {
//                continue top
//            }
//        }
//    }
//    uniValue.push(now);
//}

//console.log(uniValue, uniComb, triraidis);



// UŽDAVINYS Nr.5
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
// Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const masyvai5 = [ [], [] ];
let count = 0;

for (let j = 0; j < 2; j++) {
    do {
        count++;
        let random = rand(100, 210);
        if (masyvai5[j].indexOf(random) === -1) {
            masyvai5[j].push(random);
        }
    } while(masyvai5[j].length < 100);
}

console.log(masyvai5, count);



// UŽDAVINYS Nr.6/7
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, 
// 6. kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.

const m6 = [];
const m7 = [];

for (let i = 0; i < masyvai5[0].length; i++) {
    if (masyvai5[1].indexOf(masyvai5[0][i]) === -1) {
        m6.push(masyvai5[0][i]);
    }
    else {
        m7.push(masyvai5[0][i]);
    }
}

console.log(m6, m7);



// UŽDAVINYS Nr.8
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.

const funny = [];

for (let i = 0; i < masyvai5[0].length; i++) {
   funny[masyvai5[0][i]] = masyvai5[1][i];
 }

console.log(funny);


// UŽDAVINYS Nr.9
// Sugeneruokite 10 skaičių masyvą pagal taisyklę:
// Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
//Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

const fm = [];

fm.push(rand(5, 25), rand(5, 25));

for (let j = 2; j < 10; j++) {
    let sum = fm[j-1] + fm[j-2];
    fm.push(sum);
}
console.log(fm);
