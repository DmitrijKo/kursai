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
// 2.	Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. 
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
