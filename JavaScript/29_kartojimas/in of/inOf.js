
const ar = [77, 99, 105, 42];

for (const val of ar) { // of  
   console.log(val);    // grazina masyvo reiksmes
}

console.log('-----');

for (const val in ar) { // in 
   console.log(val, ar[val]); // grazina masyvo indeksus ir reiksmes
}