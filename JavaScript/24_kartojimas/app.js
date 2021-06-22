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
      let out = '';
      check2.forEach(ch => {
         if (ch.checked) {
            out += ch.value + '';
         }
      });
      h1.innerText = out;
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



// Pakartoti 1-5 uždavinius. 
// Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). 
// Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą 
// (5 uždavinio atveju įrašyti masyvą su pažymėtom reikšmėm) ir į console.log išvesti tą masyvą.
console.log('__________ Nr. 8 __________');

// 1.
let arr1 = [];
//const input1 = document.querySelector('.in1');

const b1Click2 = function() {
   arr1.push(input1.value);
   console.log(arr1);
}

document.querySelector('#b1').addEventListener('click', b1Click2);

// 2.
let arr2 = [];

const s1Console2 = function() {
   arr2.push(select1.value);
   console.log(arr2);
}

select1.addEventListener('change', s1Console2);

// 3.
let arr3 = [];

for(let i = 0; i < radio1.length; i++) {
   radio1[i].addEventListener('change', (e) => {
      arr3.push(e.target.value);
      console.log(arr3)
   });        
}

// 4.
let arr4 = [];

check1.addEventListener('change', (e) => {
   if(e.target.checked) {
      arr4.push('Pažymėta');
      console.log(arr4)
   } else {
      arr4.push('Nepažymėta');
      console.log(arr4)
   }
});

// 5.
let arr5 = [];

check2.forEach(chEl => {
   chEl.addEventListener('change', () => {
      let temp =[];
      check2.forEach(ch => {
         if (ch.checked) {
            temp.push(ch.value);
         }
      });
      arr5.push(temp)
      console.log(arr5);
   });
});



// Padarykite mygtuką “GO”, kurį paspaudus, naudojant masyvus gautus 8 uždavinyje, 
// dinamiškai iš tų masyvų duomenų būtų sukurti h3 tagai kaip tai buvo padaryta 7 uždavinyje.
console.log('__________ Nr. 9 __________');

const go = document.querySelector('#go');
const h3Div2 = document.querySelector('.h3Div2');

go.addEventListener('click', () => {
   arr1.forEach(e => {
      let h3 = document.createElement('h3');
      h3.style.color = 'green';
      h3.innerText = e;
      h3Div2.appendChild(h3);
   });
   arr2.forEach(e => {
      let h3 = document.createElement('h3');
      h3.style.color = 'green';
      h3.innerText = e;
      h3Div2.appendChild(h3);
   });
   arr3.forEach(e => {
      let h3 = document.createElement('h3');
      h3.style.color = 'green';
      h3.innerText = e;
      h3Div2.appendChild(h3);
   });
   arr4.forEach(e => {
      let h3 = document.createElement('h3');
      h3.style.color = 'green';
      h3.innerText = e;
      h3Div2.appendChild(h3);
   });
   arr5.forEach(e => {
      let h3 = document.createElement('h3');
      h3.style.color = 'green';
      h3.innerText = e;
      h3Div2.appendChild(h3);
   });
});



// Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
console.log('__________ Nr. 10 __________');

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
   arr1 = [];
   arr2 = [];
   arr3 = [];
   arr4 = [];
   arr5 = [];
})



// Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
console.log('__________ Nr. 11 __________');

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
   const h3All = document.querySelectorAll('h3');
   h3All.forEach((e) => {
   e.remove();
   })
});



// 1. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. 
// 2. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame ir kintamąjį išvesti i console.log.
// 3. Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.
console.log('__________ Nr. 12 __________');

let jsonbObject = {};
const json = document.querySelector('#json');

json.addEventListener('click', () => {
   // 1.
   jsonbObject.arr1 = arr1;
   jsonbObject.arr2 = arr2;
   jsonbObject.arr3 = arr3;
   jsonbObject.arr4 = arr4;
   jsonbObject.arr5 = arr5;

   // 2.
   const js = JSON.stringify(jsonbObject);
   console.log(js);

   // 3.
   jsonbObject2 = JSON.parse(js);
   console.log(jsonbObject2);
   for (const prop in jsonbObject2) {
      jsonbObject2[prop].forEach(e => {
         let h3 = document.createElement('h3');
         h3.style.color = 'blue';
         h3.innerText = e;
         document.querySelector('body').appendChild(h3);
      });
   }
});



// Reikia dvieju inputu (type text) ir reikia mygtuko.
// 1. Paspaudus mygtuką, tekstas kuris yra inpute nr 1 būtų atvaizduotas konsolėjė,
// 2. Tekstas iš inputo nr 2 būtų atvaizduotas dinamiškai sukurtame tage h1.
console.log('__________ Nr. 13 __________');

document.querySelector('#b2').addEventListener('click', () => {
   // 1.
   console.log(document.querySelector('.in2').value);
   // 2.
   const input3Text = document.createTextNode(document.querySelector('.in3').value);
   const h1 = document.createElement('h1');
   h1.appendChild(input3Text);
   document.querySelector('body').appendChild(h1);
});






