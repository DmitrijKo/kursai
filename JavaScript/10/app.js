function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}




const obj = {forest: 'Gump', digit2: 555, arr: [5,8,9]};

obj.color = 'Black';
obj.what = 'Cat';
obj.digit = 888;
obj.abc = {a: 'A', b: 'B', c: 'C'};
 
console.log(obj);

console.log('color', obj.color);

console.log('B:', obj.abc.b);

console.log('nera', obj.zz);

let obj2 = obj;


let A = 5;
let B = 12;
A = B; // 5 <---- 12
B = 45; // 45

let T;
let C = {A: 5};
let D = {B: 12};
D = C;  // dabar D rodys i C
T = D;  // dabar T rodys i C

D.A = 123;
console.log('C:', C, 'D:', D, 'T:', T);
console.log('A:', A, 'B:', B);


obj.f2 = 'feDu';
obj.f1 = 'feVienas';
obj.f3 = 'feTrys';

const prop = 'f' + rand(1, 3);

console.log(obj[prop]);

console.log('-------------------OBJ---------------------');

let zz = [2, 3];

zz.forEach( (j, i) => console.log(j, i));

for (let i in obj) {

    console.log(i, obj[i]);

}