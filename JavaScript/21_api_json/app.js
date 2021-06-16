const h1 = document.querySelector('h1');
document.querySelector('#labas').addEventListener('click', () => {
   fetch('http://127.0.0.1:5500/JavaScript/21_api_json/belenkoks.txt')
   .then(response => response.text())
   .then(data => h1.innerHTML = data);
});







const ul = document.querySelector('ul');
document.querySelector('#brandButton').addEventListener('click', () => {
   fetch('https://in3.dev/vinted/api/brands/all')
   .then(response => response.json())
   .then(data => {
      data.forEach(e => {
         let li = document.createElement('li');
         li.innerText = e.title;
         ul.appendChild(li);
      })
   });
});




const div = document.querySelector('div');
const imgButton = document.querySelector('#getImg');

imgButton.addEventListener('click', () => {
   fetch('https://picsum.photos/v2/list')
   .then(response => response.json())
   .then(data => {
      data.forEach(e => {
         console.log(e.download_url)
         let img = document.createElement('img');
         img.classList.add('img');
         img.style.margin = '10px';
         img.style.borderRadius = '10%';
         img.setAttribute('src', e.download_url);
         div.appendChild(img);
      })
   });
});

