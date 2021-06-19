// Sukurti text tipo input elementą ir mygtuką. 
// Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 
console.log('__________ Nr. 1 __________');

const input1 = document.querySelector('.in1');

const b1Click = function() {
   console.log(input1.value);
}

document.querySelector('#b1').addEventListener('click', b1Click);



// Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log
console.log('__________ Nr. 2 __________');

const select1 = document.querySelector('#s1');

const s1Console = function() {
   console.log(select1.value);
}

select1.addEventListener('change', s1Console);



// Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
console.log('__________ Nr. 3 __________');

const radio1 = document.querySelectorAll('[name=radio1]');

for(let i = 0; i < radio1.length; i++) {
   radio1[i].addEventListener('change', (e) => console.log(e.target.value));        
}



// Sukurti vieną checkbox tipo elementą. 
// Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”
console.log('__________ Nr. 4 __________');

const check1 = document.querySelector('#checkbox1');

check1.addEventListener('change', (e) => {
   if(e.target.checked) {
      console.log('Pažymėta')
   } else {
      console.log('Nepažymėta')
   }
});



// Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm checkbox elemente, kiekvieno pažymėto checkbox elemento reikšmę išvesti į console.log
console.log('__________ Nr. 5 __________');

const check2 = document.querySelectorAll('[name=nr5]')

check2.forEach(chEl => {
   chEl.addEventListener('change', () => {
      console.log('------');
      check2.forEach(ch => {
         if (ch.checked) {
            console.log(ch.value);
         }
      });
   });
});



// Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.
console.log('__________ Nr. 6 __________');

// 1.
const h1 = document.querySelector('h1');
document.querySelector('#b1').addEventListener('click', () => {h1.innerText = input1.value});

// 2.
select1.addEventListener('change', () => {h1.innerText = select1.value});

// 3.
radio1.forEach(e => {
   e.addEventListener('change', (e) => {
      h1.innerText = e.target.value;
   })
});

// 4.
check1.addEventListener('click', (e) => {
   if(e.target.checked) {
      h1.innerText = 'Pažymėta';
   } else {
      h1.innerText = 'Nepažymėta';
   }
});

// 5.
check2.forEach(chEl => {
   chEl.addEventListener('change', () => {
      check2.forEach(ch => {
         if (ch.checked) {
            h1.innerText = ch.value;
         }
      });
   });
});



// Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai sukurtuose elementuose h3.
console.log('__________ Nr. 7 __________');

// 1.
const h3Div = document.querySelector('.h3Div');
document.querySelector('#b1').addEventListener('click', () => {
   let h3 = document.createElement('h3');
   h3.style.color = 'orange';
   h3.innerText = input1.value;
   h3Div.appendChild(h3);
});

// 2.
select1.addEventListener('change', () => {
   let h3 = document.createElement('h3');
   h3.style.color = 'orange';
   h3.innerText = select1.value;
   h3Div.appendChild(h3);
});

// 3.

radio1.forEach(e => {
   e.addEventListener('change', (e) => {
      let h3 = document.createElement('h3');
      h3.style.color = 'orange';
      h3.innerText = e.target.value;
      h3Div.appendChild(h3);
   })
});

// 4.
check1.addEventListener('click', (e) => {
   let h3 = document.createElement('h3');
   h3.style.color = 'orange';
   h3Div.appendChild(h3);
   if(e.target.checked) {
      h3.innerText = 'Pažymėta';
   } else {
      h3.innerText = 'Nepažymėta';
   }
});

// 5.
check2.forEach(chEl => {
   chEl.addEventListener('change', () => {
      check2.forEach(ch => {
         if (ch.checked) {
            let h3 = document.createElement('h3');
            h3.style.color = 'orange';
            h3Div.appendChild(h3);
            h3.innerText = ch.value;
         }
      });
   });
});
