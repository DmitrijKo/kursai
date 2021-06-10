
const circle = document.querySelector('.circle');

const circleClick = function(eventas) {
   eventas.target.classList.toggle('color'); // toggle ----- prideda arba atima klase, priklausomai ar ji yra tikrinimo metu.
}

circle.addEventListener('click', circleClick);
