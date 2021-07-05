// ------- 1 ------- //
//	Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai savybei metodus prideti1Akmeni() pridetiDaugAkmenu($kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
console.log('------- 1 -------');

class Kibiras1 {
   constructor() {
      this.akmenuKiekis = 0;
   }

   prideti1Akmeni() {
      this.akmenuKiekis++;
   }

   pridetiDaugAkmenu(kiekis) {
      this.akmenuKiekis = this.akmenuKiekis + kiekis;
   }

   kiekPririnktaAkmenu() {
      console.log(this.akmenuKiekis);
   }
}

const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(10)
kibiras.pridetiDaugAkmenu(12)
kibiras.kiekPririnktaAkmenu();


// ------- 2 ------- //
//	Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
// Parašyti metodą ideti($kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. 
// Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('------- 2 -------');

class Pinigine {
   constructor() {
      this.popieriniaiPinigai = 0;
      this.metaliniaiPinigai = 0;
   }

   ideti(kiekis) {
      if (kiekis <= 2) {
         this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
      }
      else {
         this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
      }
   }

   skaiciuoti() {
      console.log(this.metaliniaiPinigai + this.popieriniaiPinigai);
   }
}

const pinigai = new Pinigine();

pinigai.ideti(4);
pinigai.ideti(2);
pinigai.ideti(2);
pinigai.ideti(4);
pinigai.skaiciuoti();


//------ 3 -----//
// Sukurti klasę PirkiniuKrepšelis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
// Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
// Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
// Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
console.log('------ 3 -----');

class PirkiniuKrepselis {
   constructor() {
      this.turinys = new Map();
   }

   idetiProdukta(kiekis, produktas) {
      if (this.turinys.has(produktas)) {
         const t = this.turinys.get(produktas);
         this.turinys.set(produktas, kiekis + t);
      }
      else {
         this.turinys.set(produktas, kiekis);
      }
   }

   idetiSureliu(kiekis) {
     this.idetiProdukta(kiekis, 'Surelis');
   }

   idetiPieno(kiekis) {
      this.idetiProdukta(kiekis, 'Pienas');
   }

   idetiDuonos(kiekis) {
      this.idetiProdukta(kiekis, 'Duona');
   }

   krepselioTurinys() {
      console.log('Krepselyje turim sureliu:', this.turinys.get('Surelis'));
      console.log('Krepselyje turim duonos:', this.turinys.get('Duona'));
      console.log('Krepselyje turim pieno:', this.turinys.get('Pienas'));
      
   }
}

const krepselis = new PirkiniuKrepselis();

krepselis.idetiSureliu(5);
krepselis.idetiSureliu(11);
krepselis.idetiDuonos(2);
krepselis.idetiPieno(3);
krepselis.krepselioTurinys();



//------ 4 -----//
// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
console.log('------ 4 -----');
class Troleibusas {
   constructor() {
      this.keleiviuSkaicius = 0;
   }

   ilipa(keleiviuSkaicius) {
      this.keleiviuSkaicius += keleiviuSkaicius;
   }

   islipa(keleiviuSkaicius) {
      const t = this.keleiviuSkaicius - keleiviuSkaicius;
      if (t <= 0) {
         this.keleiviuSkaicius = 0;
      }
      else {
         this.keleiviuSkaicius -= keleiviuSkaicius;
      }
   }

   vaziuoja() {
      console.log('Troleibuse važiuoja', this.keleiviuSkaicius, 'keleiviai.');
   }
}

const transportas = new Troleibusas();

transportas.ilipa(1);
transportas.ilipa(6);
transportas.islipa(2);
transportas.vaziuoja();



//------ 5 -----//
// Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. 
// Turis turi būti pasirenkamas objekto kūrimo metu. 
// Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
// Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. 
// Parašyti metodą ispilti(), kuris grąžiną kiekį. 
// Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
// Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
//Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
// Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
console.log('------ 5 -----');




//------ 6 -----//
// Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. 
// Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų
// ir metoda banknotai() - popierinių pinigų skaičiavimui. 
// Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log('------ 6 -----');

class patobulintaPinigine {
   constructor() {
      this.popieriniaiPinigai = [0];
      this.metaliniaiPinigai = [0];
   }

   ideti(kiekis) {
      if (kiekis <= 2) {
         this.metaliniaiPinigai.push(kiekis);
      }
      else {
         this.popieriniaiPinigai.push(kiekis);
      }
   }

   banknotai() {
      console.log('Yra va tiek banknotų', this.popieriniaiPinigai.length -1)
   }

  monetos() {
      console.log('Yra va tiek monetų', this.metaliniaiPinigai.length -1)
   }

   skaiciuoti() {
      console.log('Yra va tiek pinigų', this.metaliniaiPinigai.reduce((a, v) => a + v) + this.popieriniaiPinigai.reduce((a, v) => a + v));
  }
}

const odinePinigine = new patobulintaPinigine();
const plastikinePinigine = new patobulintaPinigine();

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
plastikinePinigine.banknotai();
plastikinePinigine.monetos();
console.log('------------------------------');

odinePinigine.ideti(235);
plastikinePinigine.ideti(0.87);
odinePinigine.ideti(100);
plastikinePinigine.ideti(1);
odinePinigine.ideti(100);
plastikinePinigine.ideti(10);

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
odinePinigine.banknotai();
plastikinePinigine.monetos();
console.log('------------------------------');





