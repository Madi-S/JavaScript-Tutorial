const float = 3.1415;
const negative = -3;
const integer = 47;
const pow = 7.7e9; // 7.7 * 10^9

console.log('Some number types:', float, negative, integer, pow);

console.log('Maximum usable integer: 2^53 - 1:', Number.MAX_SAFE_INTEGER);
console.log('Is that so?', (Math.pow(2, 53) - 1) == Number.MAX_SAFE_INTEGER);
console.log('Transcending maximum integer by 1', Number.MAX_SAFE_INTEGER + 1);
console.log('Transcending maximum integer by 1000', Number.MAX_SAFE_INTEGER + 1000);

// Maximum numbers
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Infinity
console.log(5 / 0);
console.log(Infinity);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

// NaN - Not a Number
console.log(Number.NaN);
console.log(Number('Hello World'));
console.log('NaN\'s data type:', typeof Number.NaN);
const possiblyNotANumber = undefined * 25 - 45;
console.log('possiblyNotANumber is NaN?', isNaN(possiblyNotANumber));
console.log('float number is NaN?', isNaN(float));

// If number has ending, not infinity
console.log('55 isFinite?', isFinite(55));
console.log('Infinity isFinite?', isFinite(Infinity));

const someNumber = '54';
const anotherNumber = '912.43';
console.log(Number(someNumber));
console.log(Number(anotherNumber));          // Convert given string to float or int as it was
console.log(parseInt(anotherNumber));        // Convert given string only to int
console.log(parseFloat(anotherNumber));
// More graceful way to convert string to number
console.log(+someNumber);
console.log(+anotherNumber + .57);

console.log(0.4 + 0.2);                     // Issue here: 0.6000000000000001
// To solve the issue above
console.log((0.4 * 10 + 0.2 * 10) / 10);    // 0.6
console.log((0.4 + 0.2).toFixed(5));        // 0.60000 (Returns string and just cuts the rest of the number, does not round!)
console.log(parseFloat((0.4 + 0.2).toFixed(5))); 
