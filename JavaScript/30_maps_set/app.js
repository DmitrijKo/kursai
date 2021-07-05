const setas = new Set();
setas.add('grybas');
setas.add('aguras');
setas.add('pupelė (ankštinė)');
console.log(setas);

console.log('--- 1 ---');
// 1. išrušiuoti setą pagal abėcėlę.
const arr1 = [...setas];
arr1.sort();
setas.clear();
arr1.forEach(e => setas.add(e));
console.log(setas);

console.log('--- 2 ---');
// 2. setą įrašyti į localstorage, tada nuskaityti į setasCopy kintamąjį ir jį atspausdinti su console.log()
localStorage.setItem('setas1', JSON.stringify(arr1));
const arr2 = (JSON.parse(localStorage.getItem('setas1')))
const setasCopy = new Set();
arr2.forEach(e => setasCopy.add(e));
console.log(setasCopy);

console.log('--- 3 ---');
// 3. masyva surusiuoti, kad setai jo viduje eitu nuo didziausio iki maziausio.
const hard = [
   new Set([2,8,7]),
   new Set([2,0,7,8,7]),
   new Set([2,8,0,7,1,9]),
   new Set([2,8,7,0])
];

hard.sort((a, b) => b.size - a.size);
console.log(hard);

console.log('--- 4 ---');
// 4. padaryti kad, masyvai eina pirmi, tada eina setai.
const easy = [
   [1,8],
   new Set([7, 9]),
   new Set(),
   [1,8,7],
   new Set([7, 9, 11]),
   [],
   new Set([7, 9, 71, 11, 45]),
];

easy.sort((a, b) => {
   if (b instanceof Array === a instanceof Array ||
       b instanceof Set === a instanceof Set) {
      return 0;
   }
   else if (b instanceof Array) {
      return 1;
   }
   else if (b instanceof Set) {
      return -1;
   }
});
console.log(easy);

//console.log(hard instanceof Array); // --> true;
//console.log(setas instanceof Set);  // --> true;

console.log('--- 5 ---');
// 5. masyve easy palikti tik setus.

console.log(easy.filter(value => value instanceof Set ? 1 : 0));


// MAP //

console.log('---MAP---');

const map = new Map(); // Map'o sukurimas
map.set('Petras', 'kas guli Petro stalciuje');
map.set('Sarikas', 'kas guli Sariko budoje'); // idedam i Map'a
map.set('Janotas', 'ka siuksliu dezeje rado janotas');

console.log('has Janotas:', map.has('Janotas')); // ieskom ar Map'as turi 'Janota'
console.log('get Sarikas:', map.get('Sarikas')); // ieskom Map'e kas gero pas 'Sarika'

console.log(map);


// for of Map'a //

console.log('---for Of---');

for (const val of map) {
   console.log('for of', val)
   console.log('for of', val[0]); // tik Sarikas, Petras ir Janotas
}


// Map'o sort//
// isrusiuoti Map'a pagal key'jus abeceles tvarka

console.log('--- Mapo sort ---');

const mapArray = [...map];
console.log(mapArray);

console.log('--------');

mapArray.sort((a, b) => a[0] < b[0] ? -1 : 0);
map.clear();
mapArray.forEach(v => map.set(v[0], v[1]));
console.log(map);


console.log('--- Local Storage----');
//  map'a įrašyti į localstorage, tada nuskaityti į mapCopy kintamąjį ir jį atspausdinti su console.log()
localStorage.setItem('map1', JSON.stringify(mapArray));
const arr3 = (JSON.parse(localStorage.getItem('map1')))
const mapsCopy = new Map();
arr3.forEach(e => mapsCopy.set(e[0], e[1]));
console.log(mapsCopy);





