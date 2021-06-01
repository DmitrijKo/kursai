function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('__________UZDAVINIAI__________');
// UŽDAVINYS Nr.1
// Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25
console.log('UŽDAVINYS Nr.1');

var arr = [];

for (var i = 0; i < 30; i++) {
   arr.push(rand(5, 25));
}
console.log(arr);


// UŽDAVINYS Nr.2
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log('UŽDAVINYS Nr.2A');