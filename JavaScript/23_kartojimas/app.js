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

// Vardine funkcija
function myFunction1(arr, index) {
   return arr[index].dataset.value === 'b';
}

// Anonimine funkcija
const an1 = function(arr, index) {
   return arr[index].dataset.value === 'b';
}

// Anonimine Arrow funkcija
an2 = (arr, index) => arr[index].dataset.value === 'b';


for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      if(an1) {
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