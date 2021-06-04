function masyvas(reiksme, x) {
   const arr = [];
   for(let i = 0; i < x; i++) {
      arr.push(reiksme);
   }
   return arr;
}

let AA = masyvas('A', 10);
let BB = masyvas('B', 10);
let CC = masyvas('C', 10);

console.log(AA);
console.log(BB);
console.log(CC);