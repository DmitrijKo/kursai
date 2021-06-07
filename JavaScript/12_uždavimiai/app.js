// UŽDAVINYS Nr.1
// Parašyti dvi funkcijas be parametrų red() ir green(). 
// Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. Pademostruoti veikimą;

console.log('______________ UŽDAVINYS Nr.1 _________________');

function color1() {
   let red = 'red';
   return red;
}

function color2() {
   let green = 'green';
   return green;
}

console.log(color1());
console.log(color2());



// UŽDAVINYS Nr.2
// Parašyti funkciją color(what). Funkcija turi grąžinti splvą, priklausomai nuo argumento: 
// jeigu what == 1 - stringą “white”, jeigu what == 2 - stringą “black”,  
// kitais atvejais - “no color”. Pademostruoti veikimą;;

console.log('______________ UŽDAVINYS Nr.2 _________________');

function color(what) {
   let a = '';
   if (what === 1) {
      a = 'white';
   } else if (what === 2) {
      a = 'black';
   } else {
      a = 'no color';
   }
   return a;
}

console.log(color(2));



// UŽDAVINYS Nr.3
// Parašykite dvi funkcijas sum(a, b) ir diff(a, b). 
// Funkcijos turi suskaičiuoti sumą (a+b) arbą skirtumą (a-b) su argumentais a, b ir grąžinti rezultatą.

console.log('______________ UŽDAVINYS Nr.3 _________________');

function sum(a, b) {
   let c = a + b;
   return c;
}

function diff(a, b) {
   let c = a - b;
   return c;
}

console.log(sum(7, 3));
console.log(diff(7, 3));



// UŽDAVINYS Nr.4
// Papildyti prieš tai buvusį uždavinį, kad a ir b parametrai turėtų default argumentus lygius 0. Pademostruoti veikimą;

console.log('______________ UŽDAVINYS Nr.4 _________________');

function sum(a = 0, b = 0) {
   let c = a + b;
   return c;
}

function diff(a = 0, b = 0) {
   let c = a - b;
   return c;
}

console.log(sum(7));
console.log(diff(7));



// UŽDAVINYS Nr.5
// Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir masyvą fe [‘F’, ‘E’]. 
// Parašykite funkciją changeArray(array), kur sukeistų vietomis perduodamo masyvo reikšmes.

console.log('______________ UŽDAVINYS Nr.5 _________________');

const ab = ['A', 'B'];
const cd = ['C', 'D'];
const fe = ['F', 'E'];

function changeArray(array) {
   let temp = array[1];
   array[1] = array[0];
   array[0] = temp;

   return array;
}

console.log('Pradinis masyvas ad:', ab);
console.log('Pakeistas masyvas ad:', changeArray(ab));

console.log('Pradinis masyvas cd:', cd);
console.log('Pakeistas masyvas cd:', changeArray(cd));

console.log('Pradinis masyvas fe:', fe);
console.log('Pakeistas masyvas fe:', changeArray(fe));




// UŽDAVINYS Nr.6
// Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. 
// Objektai nėra funkcijos viduje. Sukurti funkciją changeMake(car, make), 
// kuri keistų perduodamo objekto car savybę į perduodamo make argumento reikšmę.

console.log('______________ UŽDAVINYS Nr.6 _________________');

let car1 = {
   make: 'volvo'
}

let car2 = {
   make: 'mb'
}

function changeMake(car, make) {
   car.make = make;
   return car;
}

console.log(car1);
changeMake(car1, 'tesla');
console.log(car1);

console.log(car2);
changeMake(car2, 'bmw');
console.log(car2);



