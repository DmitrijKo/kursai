const mas1 = ['cat', 'bird', 'tiger', 'dog'];
const set1 = new Set(['cat', 'bird', 'tiger', 'dog']);
const map1 = new Map([['medium','cat'], ['small','bird'], ['big','tiger'], ['unknown','dog']]);

// 1.
// isrūšiuot i abi puses
console.log('---- 1 ----');

mas1.sort((a, b) => a < b ? -1 : 1);
console.log(mas1.slice());

mas1.sort((a, b) => a > b ? -1 : 1);
console.log(mas1.slice());


// 2.
// padaryti dvi funkcijas, kurios argumentu priimtų masyvą.
console.log('---- 2 ----');

function sortAsc(arr) {
   arr.sort((a, b) => a < b ? -1 : 1);
   console.log(arr.slice());
}

function sortDesc(arr) {
   arr.sort((a, b) => a > b ? -1 : 1);
   console.log(arr.slice());
}

sortAsc(mas1);
sortDesc(mas1);


// 3/4/5.
// 3. sukurti klasę Sorter ir parašytas funkcijas įdėti kaip statinius metodus.
// 4. Metodus papildyti galimybe rūšiuoti Set'us.
// 5. Metodus papildyti galimybe rūšiuoti Map'us (pagal reikšmę)
// 6. Metodus papildyti galimybe rūšiuoti Map'us pagal raktus, į funkciją paduodant antrą argumentą lygų TRUE
console.log('---- 3/4/5/6 ----');

class Sorter {

   static sortAsc(data) {
      if (data instanceof Array) {
         return this.sortArrAsc(data)
      }
      if (data instanceof Set) {
         return this.sortSetAsc(data)
      }
      if (data instanceof Map) {
         return this.sortMapAsc(data)
      }

   }
   static sortDesc(data) {
      if (data instanceof Array) {
         return this.sortArrDesc(data)
      }
      if (data instanceof Set) {
         return this.sortSetDesc(data)
      }
      if (data instanceof Map) {
         return this.sortMapDesc(data)
      }
   }

   static sortMapDesc(map) {
      const arr = ([...map]);
      arr.sort((a, b) => a[1] > b[1] ? -1 : 1);
      map.clear();
      arr.forEach(v => map.set(v[0], v[1]));
      return map
   }

   static sortMapAsc(map) {
      const arr = ([...map]);
      arr.sort((a, b) => a[1] < b[1] ? -1 : 1);
      map.clear();
      arr.forEach(v => map.set(v[0], v[1]));
      return map
   }

   static sortSetAsc(set) {
      const arr = this.sortArrAsc([...set]);
      set.clear();
      arr.forEach(v => set.add(v));
      return set;
   }

   static sortSetDesc(set) {
      const arr = this.sortArrDesc([...set]);
      set.clear();
      arr.forEach(v => set.add(v));
      return set;
   }

   static sortArrAsc(arr) {
      arr.sort((a, b) => a < b ? -1 : 1);
      return arr;
   }
   static sortArrDesc(arr) {
      arr.sort((a, b) => a > b ? -1 : 1);
      return arr;
   }
}

console.log(Sorter.sortAsc(mas1));
console.log(Sorter.sortDesc(mas1));

console.log(Sorter.sortAsc(set1));
console.log(Sorter.sortDesc(set1));

console.log(Sorter.sortAsc(map1));
console.log(Sorter.sortDesc(map1));


// 7.
// A. Pagaminti MAP tipo objekta kuriame raktas yra id is json'o stringo ir isvesti i console.
// B. Pagaminti mygtuka HTML'e, kuri paspaudus is json'o stringo pasidarytu Set tipo objektas
//  su reiksmemis (kompaniju vardai) isrusiuotais pagal Asc ir isvesti seta i konsole.
console.log('---- 7 ----');

const json = '[{"id":1,"title":"MAC"},{"id":2,"title":"Nike"},{"id":3,"title":"Victoria\u2019s Secret"},{"id":4,"title":"Zara"},{"id":5,"title":"Zizzi"},{"id":6,"title":"Witteveen"},{"id":7,"title":"H&M"},{"id":8,"title":"RIMOWA"},{"id":9,"title":"Adidas"},{"id":10,"title":"Paw Patrol"},{"id":11,"title":"Mattel"},{"id":12,"title":"Kenzo"},{"id":13,"title":"Asos"}]';

// A.
const jsonArr = JSON.parse(json);
const map = new Map();
jsonArr.forEach(e => {
   map.set(e.id, e.title);
});

console.log(map);

// B.

document.querySelector('button').addEventListener('click', () => {
   const set = new Set();
   jsonArr.forEach(e => {
      //set.add(e.id);
      set.add(e.title);
   });
   const arr = [...set];
   arr.sort();
   set.clear();
   arr.forEach(e => set.add(e));
   console.log(set);
});
