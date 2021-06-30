class Tv {
   constructor(is, kanalai, title) {
      this.istrizaine = is;
      this.kanalai = kanalai;
      this.title = title;
   }

   putIn() {
      localStorage.setItem(this.title, JSON.stringify(this));
   }

   getBack() {
      let out3 = localStorage.getItem(this.title);
      out3 = JSON.parse(out3);
      return [out3.istrizaine, out3.kanalai, out3.title];
   }
}

const tv1 = new Tv(78, ['LTV', 'TV3', 'LNK'], 'tv1');
const tv2 = new Tv(32, ['Discovery', 'GC', 'MTV'], 'tv2');

tv1.putIn();
let out1 = new Tv(...tv1.getBack());
out1.istrizaine++;
out1.putIn();
out1 = new Tv(...out1.getBack());

console.log(out1);
console.log(tv1);



tv2.putIn();
let out2 = new Tv(...tv2.getBack());
out2.istrizaine++;
out2.putIn();
out2 = new Tv(...out2.getBack());

console.log(out2);
console.log(tv2);



//console.log(tv1);
//console.log(tv2);

//console.log(tv1.istrizaine);


//------------------------------------//
console.log('-------------------------');


const tv3 = {
   istrizaine: 78,
   kanalai: ['LTV', 'TV3', 'LNK']
};

const tv4 = {
   istrizaine: 32,
   kanalai: ['Discovery', 'GC', 'MTV']
};

localStorage.setItem('tv3', JSON.stringify(tv3));
let out3 = localStorage.getItem('tv3');
out3 = JSON.parse(out3);
out3.istrizaine++;
localStorage.setItem('tv3', JSON.stringify(out3));
out3 = localStorage.getItem('tv3');
out3 = JSON.parse(out3);


localStorage.setItem('tv4', JSON.stringify(tv4));
let out4 = localStorage.getItem('tv4');
out4 = JSON.parse(out4);
out4.istrizaine++;
localStorage.setItem('tv3', JSON.stringify(out4));
out4 = localStorage.getItem('tv3');
out4 = JSON.parse(out4);

console.log(out3);
console.log(out4);