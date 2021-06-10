function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


const ul = document.querySelectorAll('ul');
const color = ['green', 'yellow', 'blue'];
const cl = ['one', 'two', 'three']

for (let i = 0; i < ul.length; i++) {
   const li = ul[i].querySelectorAll('li');

   for (let j = 0; j < li.length; j++) {
     li[j].style.color = color[i % 3];
     li[j].style.fontSize = rand(10, 30) + 'px';
     li[j].classList.add(cl[j % 3]);
   }
}


// ---------------------

const kont = document.querySelector('.box');
const div = kont.querySelectorAll('div');

function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }

 const randGray = () => {
    const c = rand(0, 255);
    return 'rgb('+ c +',' + c +',' + c + ')';
 }

for (let i = 0; i < div.length; i++) {
   if (!(i % 2)) {
      div[i].classList.add('nepor')
      div[i].style.backgroundColor = randGray();
   } else {
      div[i].style.width = 100 + 'px';
      div[i].style.margin = 10 + 'px';
      div[i].style.height = 100 + 'px';
      div[i].style.borderRadius = 50 + '%';
      div[i].style.backgroundColor = getRandomColor();
   }
}



