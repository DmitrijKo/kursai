
console.log('-- 1 --');
// Sukurti setą iš 3 skirtingų stringų
const mySet1 = new Set();
mySet1.add('Rytas');
mySet1.add('Diena');
mySet1.add('Vakaras');
console.log(mySet1);

console.log('-- 2 --');
// Iteruoti sukurtą setą su for of
for (const prop of mySet1) {
   console.log(prop);
}

console.log('-- 3 --');
// Sukuriam masyvą iš seto
const setArr = [...mySet1];
console.log(setArr);

console.log('-- 4 --');
// į sukurtą masyvą pridedame dar du skirtingus stringus
setArr.push('Lape')
setArr.push('Barsukas')
console.log(setArr);

console.log('-- 5 --');
// iš sukurto masyvo, duomenis sukeliam atgal į setą
setArr.forEach(e => mySet1.add(e))
console.log(mySet1);

console.log('-- 6 --');
// sukuriam naują setą, kuriame būtų seno seto stringų pirmos raidės
const mySet2 = new Set();
for (const prop of mySet1) {
   mySet2.add(prop[0])
}
console.log(mySet2);

console.log('-- 7 --');
// naują setą išrūšiuojame pagal abėcėlę
const setArr2 = [...mySet2];
setArr2.sort();
mySet2.clear();
setArr2.forEach(e => mySet2.add(e))
console.log(mySet2);
