const ul = document.querySelectorAll('ul');

console.log('__________ Nr. 1 __________');

for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      console.log(li[j].dataset.value);
   }
}

console.log('__________ Nr. 2 __________');

for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      console.log(j);
   }
}

console.log('__________ Nr. 3 __________');

for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      if(li[j].dataset.value === 'a') {
         console.log(li[j].dataset.value);
      }
   }
}

console.log('__________ Nr. 4 __________');

// Pirma funkcija
function myFunction1(x) {
   return x.dataset.value === 'b';
}

// Antra funkcija
c2 = (e) => {return e.dataset.value === 'b';}


for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      // Trecia funkcija
      const c1 = myFunction1(li[j]);
      if(c1) {
         console.log(j);
      }
   }
}

console.log('__________ Nr. 5 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e) => console.log(e.dataset.value));
});

console.log('__________ Nr. 6 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e, i) => console.log(i));
});

console.log('__________ Nr. 7 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e) => {
      if(e.dataset.value === 'a') {
         console.log(e.dataset.value);
      }
   })
});

console.log('__________ Nr. 8 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e, i) => {
      if(e.dataset.value === 'b') {
         console.log(i);
      }
   })
});