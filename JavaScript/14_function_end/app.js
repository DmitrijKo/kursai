// UŽDAVINYS Nr.11
//  pele.getA() ----> isvestu i console "a" raidziu skaiciu
console.log('______________ UŽDAVINYS Nr.11 _________________');

const letterCounter = function(x) {
   let count = 0;
   for (let i = 0; i < this.length; i++) {
      if (this[i] === x ) {
         count++;
      }
   }
   console.log('Sakinyje', '"' + this.valueOf() + '"', 'yra', count, '"' + x + '"', 'raidės');
}

String.prototype.getA = letterCounter;

const pele = 'laaabai daug peliu';
const hello = 'Labas vakaras aaaa';
const dest = 'Arvydas Kijakauskas';

pele.getA('a');
hello.getA('s');
dest.getA('j');



// UŽDAVINYS Nr.12
//  
console.log('______________ UŽDAVINYS Nr.12 _________________');

const m1 = (...arg) => {
   let count = 0;
   for(let i = 0; i < arg.length; i++) {
      count += arg[i]
   }
   console.log('Argumentai:', arg);
   console.log('Argumentu bendroji suma:', count);
   console.log('Argumentu vidurkis:', count / arg.length);
}

m1(1, 2, 3);