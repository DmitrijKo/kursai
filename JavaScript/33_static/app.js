class Kibiras1 {

   static bendrasAkmenuKiekis = 0; // static

   static skaiciuotiVisusAkmenis(kiekis) { // static
       this.bendrasAkmenuKiekis += kiekis; // static
   }

   static kiekPririnktaAkmenu() {
       console.log('Viso jau surinkta tiek', this.bendrasAkmenuKiekis, 'akmenų'); //static
   }

   constructor() {
       this.akmenuKiekis = 0;
   }

   prideti1Akmeni() {
       this.constructor.skaiciuotiVisusAkmenis(1); // static
       this.akmenuKiekis ++;
   }

   pridetiDaugAkmenu(kiekis) {
       this.constructor.skaiciuotiVisusAkmenis(kiekis); // static
       this.akmenuKiekis += kiekis;
   }

   kiekPririnktaAkmenu() {
       console.log('Akmenų yra va tiek:', this.akmenuKiekis);
   }
}

const kibiras = new Kibiras1();
const viedras = new Kibiras1();
const kasikas = new Kibiras1();


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
Kibiras1.kiekPririnktaAkmenu(); // static
console.log('------------------------------');

viedras.prideti1Akmeni(100);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
Kibiras1.kiekPririnktaAkmenu(); // static
console.log('------------------------------');


kasikas.pridetiDaugAkmenu(22);
viedras.pridetiDaugAkmenu(22);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
Kibiras1.kiekPririnktaAkmenu(); // static
console.log('------------------------------');