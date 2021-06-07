function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


// UŽDAVINYS Nr.7
// Paršyti funkciją kuri masyve visas jo reikšmes pakeistų į atsitiktinai sugeneruotas spalvas (string'us): 
// “red”, “blue” arba “green”. Funkcija turi turėti du argumentus, 
// vienas generuojamas masyvas, o kitas funkcija - spalvų generatorius. 
console.log('______________ UŽDAVINYS Nr.7 _________________');

const arr = [1, 2, 3];
console.log(arr);

function f7(masyvas, fun){
   for (let i = 0; i < masyvas.length; i++) {
      masyvas[i] = fun();
   }
}

f7(arr, function() {
   return ['red', 'blue', 'green'][rand(0, 2)];
})

//f7(arr, () => ['red', 'blue', 'green'][rand(0, 2)]);   // rodyklinis funkcijos iskvietimas

console.log(arr);



// UŽDAVINYS Nr.8
// Yra masyvas [8, 9, 7, 6, 12, 48, 0, 6].
// Išrūšiuoti masyvą naudojan sort ir atskirą rūšiavimo funkciją.
console.log('______________ UŽDAVINYS Nr.8 _________________');

let arr1 = [8, 9, 7, 6, 12, 48, 0, 6];

 arr1.sort(function(a, b) {
   return b - a;
 });

 console.log(arr1);

 arr1.sort((a, b) => a - b);
console.log(arr1);



// UŽDAVINYS Nr.9
// Yra masyvas [“Pingvinas”, “Zebras”, “Voras”, “Vilkas”, “Zuikis”]. 
// Sukurti naują masyvą naudojant map ir atskirą funkciją, kuriame atitinkami indeksai atitiktų žodžių ilgį.
console.log('______________ UŽDAVINYS Nr.9 _________________');

const arr2 = ['Pingvinas', 'Zebras', 'Voras', 'Vilkas', 'Zuikis'];

console.log(arr2);

const arr3 = arr2.map(x => x.length);
console.log(arr3)



// UŽDAVINYS Nr.10
// Yra masyvas [8, “B”, 9, 7, “A”, 6, 12, “B”, “B”, “A”, 48, 0, “A”, 6].
// Išrūšiuoti masyvą nuo didžiausio iki mažiausio naudojant sort ir atskirą rūšiavimo funkciją. 
// “A” raidės turi eiti pačiam gele, o “B” raidės pačiame priekyje.
console.log('______________ UŽDAVINYS Nr.10 _________________');

const arr4 = [8, 'B', 9, 7, 'A', 6, 12, 'B', 'B', 'A', 48, 0, 'A', 6];

arr4.sort((a, b) => {
      if (a === 'A') return 1;
      if (b === 'B') return 1;
      if (b === 'A') return -1;
      if (a === 'B') return -1;
      return b - a;
})
console.log(arr4);
