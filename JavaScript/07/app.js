function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}




var c;
do{
   c = rand(10, 25);
   if (c < 12) {
      break;
   }
   console.log(c);
} while(true);