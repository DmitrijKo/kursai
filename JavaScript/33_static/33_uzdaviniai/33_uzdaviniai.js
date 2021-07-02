// ---- 1 ---- //
// Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
// Tam tikslui sukurkite statini metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), 
// kuris pridėtų arba atimtų keileivius iš statinės savybės visiKeleiviai, 
// kurioje yra įrašytas bendras keleivių skaičius. 
// Taip pat modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
console.log('---- 1 ----');

class Troleibusas {
   static visiKeleiviai = 0;

   static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
      this.visiKeleiviai += keleiviuSkaicius;
   }

   static keleiviuSkaiciusVisuoseTroleibusuose() {
      console.log('Šiuo metu visuose troleibusuose yra:', this.visiKeleiviai, 'žmonių');
   }

   constructor() {
      this.keleiviuSkaicius = 0;
   }

   ilipa(keleiviuSkaicius) {
      this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
      this.keleiviuSkaicius += keleiviuSkaicius;
   }

   islipa(keleiviuSkaicius) {
      if (keleiviuSkaicius > this.keleiviuSkaicius) {
          console.log('Per daug keleivių išlipa!');
          this.keleiviuSkaicius = 0;
          this.constructor.visiKeleiviai = this.keleiviuSkaicius;
      }
      else {
          this.keleiviuSkaicius -= keleiviuSkaicius;
         // this.constructor.visiKeleiviai -= keleiviuSkaicius;
      }
  }

   vaziuoja(numeris) {
      console.log('Troleibuse numeris', numeris, 'važiuoja', this.keleiviuSkaicius, 'keleiviai.');
   }
}

const troleibusasNr1 = new Troleibusas();
const troleibusasNr2 = new Troleibusas();
const troleibusasNr3 = new Troleibusas();

troleibusasNr1.ilipa(1);
troleibusasNr1.ilipa(6);
troleibusasNr1.islipa(3);
troleibusasNr1.vaziuoja(1);
console.log('----------------------');

troleibusasNr2.ilipa(15);
troleibusasNr2.ilipa(5);
troleibusasNr2.islipa(2);
troleibusasNr2.vaziuoja(2);
console.log('----------------------');

troleibusasNr3.ilipa(12);
troleibusasNr3.ilipa(1);
troleibusasNr3.islipa(19);
troleibusasNr3.vaziuoja(3);
console.log('----------------------');

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();


