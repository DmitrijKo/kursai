
//----------------A----------
const a = document.querySelector('a');
const h1 = document.querySelector('h1');


a.style.color = 'green';
h1.style.color = 'red';

const h1Click = function () {
   h1.style.color = 'blue';
}

h1.addEventListener('click', h1Click);



//----------------B----------
const divai = document.querySelectorAll('div');

//const divClick = function (eventas) {
//   eventas.target.style.display = 'none';
//}

//for (let i = 0; i < divai.length; i++) {
//   divai[i].addEventListener('click', divClick);
//}


//----------------C----------
const myFunction = function (eventas) {
   eventas.target.remove();
}

for (let i = 0; i < divai.length; i++) {
   divai[i].addEventListener('click', myFunction);
}

//----------------D----------
const dukraSpan = document.querySelector('i span');

const killFamily = function (e) {
   e.target.closest('i').remove();
}

dukraSpan.addEventListener('click', killFamily)


//------------Nauja tema------------------

const newDukra = document.createElement('span'); //sukuriam spana

const nameOfDukra = document.createTextNode('Dukra 2'); //sukuriam teksta

newDukra.appendChild(nameOfDukra); //idedam teksta i spana

const oldDukra = document.querySelector('span'); // surandam pries ka norim deti nauja spana

const tevas = document.querySelector('i'); // surandam ju teva

tevas.insertBefore(newDukra, oldDukra); // idedam i prieki
//tevas.appendChild(newDukra); // ideda i gala



//const newDukra = document.createElement('span');
//const nameOfDukra = document.createTextNode('Dukra 2');
//newDukra.appendChild(nameOfDukra);
//const tevas = document.querySelector('i');
//tevas.appendChild(newDukra);


//--------------------------------------------
const h2 = document.querySelectorAll('h2');

for (let i = 0; i < h2.length; i++) {
   const sunus = document.createElement('span'); //sukuriam spana
   const nameOfSunus = document.createTextNode(i + 1); // sukuriam teksta kuri noresim deti i spana
   sunus.appendChild(nameOfSunus); // idedam teksta i spana
   h2[i].appendChild(sunus); // priskiriam naujai sukurta spana i kiekviena i-taji elementa.
}


