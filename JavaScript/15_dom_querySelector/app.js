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



