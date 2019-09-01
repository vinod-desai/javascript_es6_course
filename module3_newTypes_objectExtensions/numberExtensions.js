// console.log(Number.parseInt === parseInt); // true
// console.log(Number.parseFloat === parseFloat); // true

// let s = 'NaN';
// console.log(isNaN(s)); // true (s is converted to real NaN)
// console.log(Number.isNaN(s)); // false (s is string)

// let s = '7000';
// console.log(isFinite(s)); // true (s is converted to Number)
// console.log(Number.isFinite(s)); // false (s is string)

// console.log(Number.isInteger(NaN)); // false
// console.log(Number.isInteger(undefined)); // false
// console.log(Number.isInteger(Infinity)); // false
// console.log(Number.isInteger(3)); // true

// let a = Math.pow(2, 53) - 1;
// console.log(Number.isSafeInteger(a)); // true
// a = Math.pow(2, 53);
// console.log(Number.isSafeInteger(a)); // false

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991