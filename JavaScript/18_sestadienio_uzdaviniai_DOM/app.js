// UŽDAVINYS Nr.1A
// Tamsiai žaliai nuspalvinti h1 tagą;
console.log('______________ UŽDAVINYS Nr.1A _________________');

const h1 = document.querySelector('h1');
h1.style.color = 'darkgreen';



// UŽDAVINYS Nr.1B
// Tagui i pridėti klasę small;
console.log('______________ UŽDAVINYS Nr.1B _________________');

const i = document.querySelector('i');
i.classList.add('small');



// UŽDAVINYS Nr.1C
// Iš tago h1 pašalinti klasę main
console.log('______________ UŽDAVINYS Nr.1C _________________');

h1.classList.remove('main');



// UŽDAVINYS Nr.1D
// Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
console.log('______________ UŽDAVINYS Nr.1D _________________');

const h2 = document.querySelector('h1 + h2');
h2.classList.remove('main');
h2.classList.add('first');



// UŽDAVINYS Nr.1E
// Span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
console.log('______________ UŽDAVINYS Nr.1E _________________');

const h2All = document.querySelectorAll('h2');
for (let i = 0; i < h2All.length; i++) {
   const span = document.querySelector('span');
   span.style.fontSize = '10px';
   span.style.color = 'gray';
}



// UŽDAVINYS Nr.2A
// Suskaičiuoti kiek yra h2 tagų;
console.log('______________ UŽDAVINYS Nr.2A _________________');

let counter = 0;
document.querySelectorAll('h2').forEach( () => counter++)
console.log('h2 tagų yra:', counter);



// UŽDAVINYS Nr.2B
// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log('______________ UŽDAVINYS Nr.2B _________________');

let h2BeFirst = 0;

document.querySelectorAll('h2').forEach( (h2) => {
      if (!(h2.classList.contains('first'))) {
         h2BeFirst++;
      }
});

//const h2All = document.querySelectorAll('h2');

//for (let i = 0; i < h2All.length; i++) {
//   if (!(h2All[i].classList.contains('first'))) {
//      h2BeFirst++;
//   }
//}

console.log('h2 tagų, kurie neturi klasės first yra:', h2BeFirst);



// UŽDAVINYS Nr.2C
// Visus h2 tagus nuspalvinti šviesiai mėlynai
console.log('______________ UŽDAVINYS Nr.2C _________________');

document.querySelectorAll('h2').forEach( (h2) => h2.style.color = 'dodgerblue');


//const h2All = document.querySelectorAll('h2');

//for (let i = 0; i < h2All.length; i++) {
//   h2All[i].style.color = 'dodgerblue';
//}



// UŽDAVINYS Nr.2D
// Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;
console.log('______________ UŽDAVINYS Nr.2D _________________');

//const divsPrice = document.querySelectorAll('div.prices');

//for (let i = 0; i < divsPrice.length; i++) {
//   divsPrice[i].classList.add('price-tag');
//}

document.querySelectorAll('div.prices h2').forEach( (divPrice) => divPrice.classList.add('price-tag'));



// UŽDAVINYS Nr.2E
// Pabraukti visus tagus su klase new;
console.log('______________ UŽDAVINYS Nr.2E _________________');

//const tagNew = document.querySelectorAll('.new')
//for (let i = 0; i < tagNew.length; i++) {
//   tagNew[i].style.textDecoration = 'underline';
//}

document.querySelectorAll('.new').forEach((newClass) => newClass.style.textDecoration = 'underline');



// UŽDAVINYS Nr.2F
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log('______________ UŽDAVINYS Nr.2F _________________');

//const ulGyvKat = document.querySelectorAll('ul');
//console.log('gyvūnų kategorijų yra:', ulGyvKat.length)

let gyvKat = 0;
document.querySelectorAll('ul').forEach(() => gyvKat++);
console.log('gyvūnų kategorijų yra:', gyvKat);


// UŽDAVINYS Nr.2G
// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje
// ir 50px paddingą kairėje ir dešinėje;
console.log('______________ UŽDAVINYS Nr.2G _________________');

//for (let i = 0; i < ulGyvKat.length; i++) {
//   ulGyvKat[i].style.border = '1px solid black';
//   ulGyvKat[i].style.paddingTop = '15px';
//   ulGyvKat[i].style.paddingBottom = '15px';
//   ulGyvKat[i].style.paddingLeft = '50px';
//   ulGyvKat[i].style.paddingRight = '50px';
//}

document.querySelectorAll('ul').forEach((ulGyvKat) => {
   ulGyvKat.style.border = '1px solid black';
   ulGyvKat.style.paddingTop = '15px';
   ulGyvKat.style.paddingBottom = '15px';
   ulGyvKat.style.paddingLeft = '50px';
   ulGyvKat.style.paddingRight = '50px';
});



// UŽDAVINYS Nr.2H
// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log('______________ UŽDAVINYS Nr.2H _________________');

//const naujiGyv = document.querySelectorAll('li.new');
//console.log('naujų gyvūnų su klase new yra:', naujiGyv.length);

let gyvNew = 0;
document.querySelectorAll('li.new').forEach(() => gyvNew++)
console.log('naujų gyvūnų su klase new yra:', gyvNew);


// UŽDAVINYS Nr.2I
// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log('______________ UŽDAVINYS Nr.2I _________________');

const newAnimalList = {};

document.querySelectorAll('ul').forEach( ul => {
   let count = 0;
   ul.querySelectorAll('li').forEach( li => {
      if (li.classList.contains('new')) {
         count++
      }
   });
   newAnimalList[ul.id] = count;
});

console.log(newAnimalList);



// UŽDAVINYS Nr.3A
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;
console.log('______________ UŽDAVINYS Nr.3A _________________');

const h1Color = document.querySelector('#h1-color')

const myFunction1 = function () {
   h1.style.color = 'green';
}

h1Color.addEventListener('click', myFunction1)

////////////////////////////////////

const myFunction2 = function () {
   h1.style.fontSize = '10px';
}

document.querySelector('#h1-font').addEventListener('click', myFunction2);



// UŽDAVINYS Nr.3B
// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
console.log('______________ UŽDAVINYS Nr.3B _________________');

const iClick = document.querySelector('i');

const myFunction3 = function () {
   iClick.style.fontWeight = 'bold';
}

iClick.addEventListener('click', myFunction3)



// UŽDAVINYS Nr.3C
//	Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, 
// o paspaudus dar kartą vėl grįžtu į baltą spalvą
console.log('______________ UŽDAVINYS Nr.3C _________________');

//const priceBg = function (e) {
//   //e.stopPropogation();
//   e.target.classList.toggle('bgColor');
//}

//document.querySelector('.prices').addEventListener('click', priceBg);



// antras sprendimas be 'toggle'.

const backgroundGray = el => {
    if (el.target.style.backgroundColor === '' || el.target.style.backgroundColor === 'white'){
        el.target.style.backgroundColor = 'gray';
    }
    else {el.target.style.backgroundColor = 'white'};
}

document.querySelector('.prices').addEventListener('click', backgroundGray);


// UŽDAVINYS Nr.3D
//	Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
console.log('______________ UŽDAVINYS Nr.3D _________________');

document.querySelector('#contacts').addEventListener('click', e => {
   e.target.classList.toggle('color');
});



// UŽDAVINYS Nr.3E
//	Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, 
// tagui su id contacts būtų pridėta css savybė fontSize = 20px;
console.log('______________ UŽDAVINYS Nr.3E _________________');

document.querySelector('#contacts u').addEventListener('click', e => {
   e.target.classList.toggle('big');
});



// UŽDAVINYS Nr.3F
//	Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos
console.log('______________ UŽDAVINYS Nr.3F _________________');



// UŽDAVINYS Nr.3G
//	Padaryti tai ką liepia mygtukai Header2 sekcijoje;
console.log('______________ UŽDAVINYS Nr.3G _________________');



// UŽDAVINYS Nr.4A
//	Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai
console.log('______________ UŽDAVINYS Nr.4A _________________');

document.querySelectorAll('.new').forEach(animal => {
   animal.addEventListener('dblclick', e => {
       e.target.style.color = 'red';
   })
})