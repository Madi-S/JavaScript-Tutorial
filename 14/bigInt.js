// New DataType - BigInt
// Allows working with integers > MAX_SAFE_INTEGER

// Structure: `largeNumber`n

console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof 900719925474099112332);          // number
console.log(typeof 900719925474099112332n);         // bigint
console.log(typeof -23900719925474099112332n);      // BigInt also works with negative numbers 
// console.log(typeof -23900719925474099112332.4565n); // error

console.log(parseInt(10n) + 6);
console.log(40n + BigInt(2));
console.log(5n / 2n);
console.log(10n / 3n);