const masyvas1 = [55, 77, 99, 100];
const masyvas2 = [55, 77, 99, 100, 777];
let obj = {};

///
console.log('---- 1 ----');
masyvas1.forEach((e, i) => obj['a' + (i + 1)] = e);
console.log(obj);

///
console.log('---- 2 ----');
const masyvas3 = [];
for( let prop in obj) {
   masyvas3.push(obj[prop]);
}
console.log(masyvas3);

///
console.log('---- 3 ----');
const ul = document.querySelector('ul');
const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';
const jsonParse = JSON.parse(json);

jsonParse.sort((a,b) => {
   if (a.title > b.title) {
      return 1;
   }
   if (a.title < b.title) {
      return -1;
   }
   return 0;
});

for(let prop in jsonParse) {
   const liText = document.createTextNode(jsonParse[prop].title);
   let li = document.createElement('li');
   li.appendChild(liText);
   ul.appendChild(li);
}

///
console.log('---- 5 ----');
const arr = [5, 8, 9, 22];
console.log(arr);

const arr1 = arr.map(e => e * 2);
console.log(arr1);

const arr2 = arr.map(e => e * e);
console.log(arr2);


