function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('__________ APIE MASYVA _____________');

var arr = [rand(10, 50), rand(10, 50), rand(10, 50)];

console.log('Masyvas:');
console.log(arr);

console.log('Masyvo ilgis:');
console.log(arr.length);

console.log('Masyvo paskutinio indekso spausdinimas:');
console.log(arr[arr.length - 1]);

console.log('Masyvo isviniojimas:');
for (var i = 0; i < arr.length; i++) {
   console.log('Masyvo indeksas:', i, 'Indekso reiksme:', arr[i]);
}

console.log('___________ METODAS PUSH ____________');

console.log(arr);
arr.push('pele');
arr.push('kumele', 'dramblys');
console.log(arr);
// prideda i paskutini indeksa

console.log('___________ METODAS UNSHIFT _________');

console.log(arr);
arr.unshift('padanga');
console.log(arr);
// prideda i pirma indeksa

console.log('___________ METODAS SHIFT _________');

console.log(arr);
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);
// istrinam is masyvo pradzios

console.log('___________ METODAS POP _________');

console.log(arr);
console.log(arr.pop());
console.log(arr);
// isima is masyvo pabaigos


console.log('___________ METODAS SPLICE _________');

console.log(arr);
console.log(arr.splice(2, 1));
console.log(arr);
// ispjauna is masyvo pasirinkta elementa ir ju kieki is masyvo


console.log('___________ METODAS indexOf_________');

var arr1 = [2, 5, 13, 55, 2, 18, 0]; // naujas masyvas
console.log(arr1);
arr1.indexOf(13); // suranda reiksme
console.log(arr1.indexOf(13)); // parodo jos indeksa

// suranda masyve norima reiksme ir parodo jos indeksa


console.log('___________ METODAS SLICE _________');

console.log(arr1.slice());
console.log(arr1.splice(2, 3));
console.log(arr1);

// daro to metu padaryto masyvo kopija. Masyvo kopija lieka nepakeista ateity padaromais veiksmais.

