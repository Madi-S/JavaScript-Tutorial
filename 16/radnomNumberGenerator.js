
// Generates random number between `min` inclusively and `max` inclusively
function getRandomNumberBetween(min, max){
   min = Math.ceil(min);
   max = Math.floor(max);
   random = Math.random() * (max - min + 1) + min;
   return Math.floor(random);

}

console.log(getRandomNumberBetween(9, 16));