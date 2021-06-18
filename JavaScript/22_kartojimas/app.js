const ab = ['a','a','b','a','a','a','b','a','a','b','b'];
console.log(ab);

// 1.

console.log('__________ Nr. 1 __________');

let count = 1;
for(let j = 0; j < 3; j++) {
   console.log('Ciklas Nr', count++);
   for(let i = 0; i < ab.length; i++) {
      console.log(ab[i]);
   }
}


// 2.
console.log('__________ Nr. 2 __________');

let count1 = 1;
for(let j = 0; j < 3; j++) {
   console.log('Ciklas Nr', count1++);
   for(let i = 0; i < ab.length; i++) {
      console.log(i);
   }
}


// 3.
console.log('__________ Nr. 3 __________');

let count2 = 1;
for(let j = 0; j < 3; j++) {
   console.log('Ciklas Nr', count2++);
   for(let i = 0; i < ab.length; i++) {
      if(ab[i] === 'a') {
         console.log(ab[i]);
      }
   }
}


// 4.
console.log('__________ Nr. 4 __________');

let count3 = 1;
for(let j = 0; j < 3; j++) {
   console.log('Ciklas Nr', count3++);
   for(let i = 0; i < ab.length; i++) {
      if(ab[i] === 'b') {
         console.log(i);
      }
   }
}



// forEach //
const cde = ['c','d','e'];

// 5.
console.log('__________ Nr. 5 __________');

cde.forEach((e) => {
   console.log('Ciklas Nr', e);
   ab.forEach((e) => console.log(e));
}) 

// 6.
console.log('__________ Nr. 6 __________');

cde.forEach((e) => {
   console.log('Ciklas Nr', e);
   ab.forEach((e, i) => console.log(i));
}) 

// 7.
console.log('__________ Nr. 7 __________');

cde.forEach((e) => {
   console.log('Ciklas Nr', e);
   ab.forEach((e) => {
      if(e === 'a') {
         console.log(e);
      }
   });
})

// 8.
console.log('__________ Nr. 8 __________');

cde.forEach((e) => {
   console.log('Ciklas Nr', e);
   ab.forEach((e, i) => {
      if(e === 'b') {
         console.log(i);
      }
   })
});


// NAMU DARBAI
console.log('__________ NAMU DARBAI __________');

const ul = document.querySelector('ul');
const li = ul.querySelectorAll('li');

// 1.
console.log('__________ Nr. 1 __________');

// data-value  ->  dataset.value
// data-bla-bla  ->  dataset.blaBla
for(let i = 0; i < li.length; i++) {
   console.log(li[i].dataset.value);
}

// 2. 
console.log('__________ Nr. 2 __________');

for(let i = 0; i < li.length; i++) {
   console.log(i);
}

// 3.
console.log('__________ Nr. 3 __________');

for(let i = 0; i < li.length; i++) {
   if(li[i].dataset.value === 'a') {
      console.log(li[i].dataset.value);
   }
}

// 4.
console.log('__________ Nr. 4 __________');

for(let i = 0; i < li.length; i++) {
   if(li[i].dataset.value === 'b') {
      console.log(i);
   }
}

// 5.
console.log('__________ Nr. 5 __________');

li.forEach((e) => console.log(e.dataset.value));

// 6.
console.log('__________ Nr. 6 __________');

li.forEach((e, i) => console.log(i));

// 7.
console.log('__________ Nr. 7 __________');

li.forEach((e) => {
   if(e.dataset.value === 'a') {
      console.log(e.dataset.value);
   }
})

// 8.
console.log('__________ Nr. 8 __________');

li.forEach((e, i) => {
   if(e.dataset.value === 'b') {
      console.log(i);
   }
})