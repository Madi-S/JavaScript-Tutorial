// Math object's attributes and methods

// Some constants
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log('\n');

// Trigonometric functions
const radians = 45 * Math.PI / 180;
console.log(Math.tan(radians));
console.log(Math.sin(radians));
console.log(Math.cos(radians));
// Also asin, atan, acos ...

console.log('\n');

// Basics
console.log(Math.sqrt(49));
console.log(Math.sqrt(101));
console.log(Math.pow(4,3));
console.log(Math.abs(-81));

console.log('\n');

// Max and Min
console.log(Math.max(23, 54.2, Math.E, 101, -54));
console.log(Math.min(23, 54.2, Math.E, 101, -54));

console.log('\n');

// Rounding
console.log(Math.round(2.5)); // 3 Regular rounding
console.log(Math.ceil(2.1));  // 3 Round to biggest
console.log(Math.floor(2.9)); // 2 Round to smallest
console.log(Math.trunc(2.7)); // 2 Removes any decimals

console.log('\n');

// Other useful methods 
console.log(Math.random());   // random number between 0 and 1
console.log(Math.sign(-23));  // Returns 1 or -1 based on number's sign
console.log(Math.sign(43));
console.log(Math.cbrt(8));    // Cube root
console.log(Math.exp(2));     // e^x
console.log(Math.hypot(3,4)); // Find hypotenuse
console.log(Math.log(0));     // Log with base e