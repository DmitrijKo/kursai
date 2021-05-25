// Skaiciu palyginimas


console.log('2 > 1', 2 > 1);

console.log('2 < 1', 2 < 1);

console.log('2 == 1', 2 == 1);

console.log('2 != 1', 2 != 1);

console.log('2 >= 1', 2 >= 1);

console.log('2 <= 1', 2 <= 1);



// Stringu palyginimas

console.log('A == Z', 'A' == 'Z');

console.log('A != Z', 'A' != 'Z');

console.log('A > Z', 'A' > 'Z');

console.log('AA > AB', 'AA' > 'AB');

console.log('CA > AB', 'CA' > 'AB');



// Misrus palyginimas

var number = 2;
var string = '2';
console.log('2 =="2"', number == string);
console.log('2 ==="2"', number === string);

/////////////////////////////////////////////////////

var one = 20;
var two = 20;

if (one > two) {
   console.log(one, "yra didesnis")
} else if (one === two) {
   console.log(one, "ir", two, "yra lygus")
} else {
   console.log(two, "yra didesnis")
}



// Namu darbai

var firstName = 'Dmitrij';
var lastName = 'Kovalenko';
var birthday = 1988;
var thisYear = 2021;

console.log('Aš esu', firstName, lastName,'ir man yra', thisYear - birthday, 'metai!');
