//------ 1 -----//
console.log('------ 1 -----');

class Sorter {
   constructor(arr) {
      this.array = arr;
   }

   // pagal Asc
   sortByAsc() {
      this.array.sort();
      return this.array.slice();
   }

   // pagal Desc
   sortByDesc() {
      this.array.sort((a, b) => a > b ? -1 : 1);
      return this.array.slice();
   }

   // pagal stringo ilgį DESC
   sortByLengthDesc() {
      this.array.sort((a, b) => b.length - a.length);
      return this.array.slice();
   }

   // pagal paskutinį simbolį ASC
   sortByLastSimbolAsc() {
      this.array.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 0);
      return this.array.slice();
   }
}

const sorter = new Sorter(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);

console.log(sorter.sortByAsc());
console.log(sorter.sortByDesc());
console.log(sorter.sortByLengthDesc());
console.log(sorter.sortByLastSimbolAsc());


//------ 2 -----//
// Sukurti klasę SetSorter, kuri turi tuos pačius rūšiavimo metodus, 
// bet jos savybe arr yra Set tipo objektas.
console.log('------ 2 -----');

class SetSorter {
   constructor(ar) {
       this.set = ar;
       this.arr = [...ar];
   }
   arrayToSet() {
       this.set.clear();
       this.arr.forEach(v => this.set.add(v));
       return this.set;
   }
   sortByAsc() {
       this.arr.sort();
       return this.arrayToSet(); 
   }
   sortByDesc() {
       this.arr.sort((a, b) => a > b ? -1 : 1);
       return this.arrayToSet();
   }
   sortByDescLength() {
       this.arr.sort((a, b) => b.length - a.length);
       return this.arrayToSet(); 
   }
   sortByAscLast() {
       this.arr.sort((a, b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1);
       return this.arrayToSet();
   }
}

const sorter2 = new SetSorter(new Set(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']));

console.log(sorter2.sortByAsc());
console.log(sorter2.sortByDesc());
console.log(sorter2.sortByDescLength());
console.log(sorter2.sortByAscLast());


//------ 3 -----//
// Padaryti kad užrašius sorter.sortByAsc(['bla', 'ku ku', 'bam bam']) 
// būtų išrušiuotas ir grąžintas masyvas, kuris pateikiamas kaip argumentas.
console.log('------ 3 -----');

