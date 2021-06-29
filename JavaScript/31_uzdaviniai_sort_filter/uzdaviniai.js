console.log('- - - - Nr.1 - - - -');
// sudėlioti tokia tvarka: masyvai, mapai, setai.

const notSoEasy = [
   [1,8],
   new Set([7, 9]),
   new Set(),
   new Map([['a',2], ['b',2], ['c',2]]),
   [1,8,7],
   new Set([7, 9, 11]),
   [],
   new Set([7, 9, 71, 11, 45]),
   new Map([['a',2], ['c',2]]),
];

notSoEasy.sort((a, b) => {
   if (a.constructor.name === b.constructor.name) {
         return 0;
      }
   if (a instanceof Array) {
      return -1;
   }
   if (a instanceof Map) {
      if (b instanceof Array) {
         return 1;
      }
      if (b instanceof Set) {
         return -1;
      }
   }
   if (a instanceof Set) {
      return 1;
   }
});
console.log(notSoEasy);


console.log('- - - - Nr.2 - - - -');
// isrusiuoti su tiesiog sort'u ir su callback'u ir su callback'u + i priesinga puse.

// 1.
const arr1 = ['z', 's', 'a', 'd'];
arr1.sort();
console.log(arr1);

// 2.
const arr2 = ['z', 's', 'a', 'd'];
arr2.sort((a, b) => a < b ? -1 : 0);
console.log(arr2);

// 3.
const arr3 = ['z', 's', 'a', 'd'];
arr3.sort((a, b) => a > b ? 1 : 0);
console.log(arr3);

// 4. Padaryti kad 2 rūšiavimas įvyktų paspaudus mygtuką.
document.querySelector('#b1').addEventListener('click', () => {
   arr2.sort((a, b) => a < b ? -1 : 1);
   console.log(arr2);
});

// 5. Padaryti kad 3 rūšiavimas įvyktų paspaudus mygtuką.
document.querySelector('#b2').addEventListener('click', () => {
   arr3.sort((a, b) => a > b ? -1 : 1);
   console.log(arr3);
});


console.log('- - - - Nr.6 - - - -');
// 6. isrusiuoti pagal masyvo antrą elementą ASC
const m2 = [
   ['zru', 'six'],
   ['rot', 'dzi'],
   ['uxm', 'ycw'],
   ['otr', 'sth']
];

m2.sort((a, b) => a[1] < b[1] ? -1 : 0);
console.log(m2);


console.log('- - - - Nr.7 - - - -');
// 7. pagal masyvo pirmą elementą DESC.
const m3 = [
   ['zru', 'six'],
   ['rot', 'dzi'],
   ['uxm', 'ycw'],
   ['otr', 'sth']
];

m3.sort((a, b) => a[0] < b[0] ? -1 : 0);
console.log(m3);


console.log('- - - - Nr.8 - - - -');
// 8. pagal masyvo antro elemento antrą simbolį ASC
const m4 = [
   ['zru', 'six'],
   ['rot', 'dzi'],
   ['uxm', 'ycw'],
   ['otr', 'sth']
];

m4.sort((a, b) => a[1][1] < b[1][1] ? -1 : 0);
console.log(m4);


console.log('- - - - Nr.9 - - - -');
// 9. pagal masyvo pirmo elemento trečią simbolį DESC
const m5 = [
   ['zru', 'six'],
   ['rot', 'dzi'],
   ['uxm', 'ycw'],
   ['otr', 'sth']
];

m5.sort((a, b) => a[0][2] < b[0][2] ? -1 : 0);
console.log(m5)


console.log('- - - - Nr.10 - - - -');
// 10. isrusiuoti pagal katę DESC.

const arr10 = [
   new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
   new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
   new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
   new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];
arr10.sort((a, b) => a.get('cat') > b.get('cat') ? -1 : 1);
console.log(arr10);


console.log('- - - - Nr.11 - - - -');
// 11. isrusiuoti pagal šunį ASC

const arr11 = [
   new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
   new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
   new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
   new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];
arr11.sort((a, b) => a.get('dog') < b.get('dog') ? -1 : 1);
console.log(arr11);


console.log('- - - - Nr.12 - - - -');
// 12. isrusiuoti pagal gyvatės iš šuns sumą DESC

const arr12 = [
   new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
   new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
   new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
   new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];
arr12.sort((a, b) => (a.get('dog') + a.get('snake')) > (b.get('dog') + b.get('snake')) ? -1 : 1);
console.log(arr12);



console.log('- - - - Nr.12a - - - -')
// 12a. isrusiuoti pagal masyvų ilgį
const arr12a = [
   [2,5,8,9,7,4,5,2,1,5,8,9,3],
   [3,6,9,8,5,4],
   [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],
   [5,2,1,4,7,8,5,3,1]
];
arr12a.sort((a, b) => a.length < b.length ? -1 : 1);
console.log(arr12a);


console.log('- - - - Nr.13 - - - -')
// 13. pagal masyvų elementų sumą
const arr13 = [
   [2,5,8,9,7,4,5,2,1,5,8,9,3],
   [3,6,9,8,5,4],
   [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],
   [5,2,1,4,7,8,5,3,1]
];
arr13.sort((a, b) => {
   let aSum = 0;
   a.forEach(e => aSum = aSum + e);
   let bSum = 0;
   b.forEach(e => bSum = bSum + e);
   return aSum - bSum;
});
console.log(arr13);


console.log('- - - - Nr.14 - - - -')
// 14. su filter ištrinti skaičius didesnius nei 7
const arr14 = [4,5,6,9,45,4,7,8,5,2,4,8,2,1,3,32,41,85,6,8,5,6,78,11,6,8,];
console.log(arr14.filter(value => value <= 7 ? 1 : 0));


console.log('- - - - Nr.15 - - - -')
// 15. su filter iš arr15 masyvo su mapais ištrinti tuos mapus, kuriuose šuo mažiau nei 10
const arr15 = [
   new Map([['dog', 5], ['cat', 7], ['snake', 58]]),
   new Map([['snake', 33], ['dog', 14], ['cat', 8]]),
   new Map([['dog', 51], ['cat', 77], ['snake', 23]]),
   new Map([['cat', 10], ['dog', 23], ['snake', 17]])
];
console.log(arr15.filter(value => value.get('dog') > 10 ? 1 : 0));


