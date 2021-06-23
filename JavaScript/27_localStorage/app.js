for(let i = 1; i <= 100; i++) {
   localStorage.setItem('dog' + i, 'Au Au Au');
}
localStorage.clear(); // istrinam visus sunis;

///__///

const cats = [];
for(let i = 0; i < 100; i++) {
   cats.push('cat');
}
localStorage.setItem('cats', JSON.stringify(cats));
console.log(JSON.parse(localStorage.getItem('cats')));