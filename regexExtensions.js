// let pattern = /\u{1f3c4}/; // unicode characters
// console.log(pattern.test('🏄')); // false

// let pattern = /\u{1f3c4}/u; // unicode characters
// console.log(pattern.test('🏄')); // true

// let pattern = /^.Surfer/; // unicode characters
// console.log(pattern.test('🏄Surfer')); // false

// let pattern = /^.Surfer/u; // unicode characters
// console.log(pattern.test('🏄Surfer')); // true

// let pattern = /900/y;
// console.log(pattern.lastIndex); // 0
// console.log(pattern.test('800900')); // false

// let pattern = /900/y;
// pattern.lastIndex = 3;
// console.log(pattern.test('800900')); // true

let pattern = /900/yg;
console.log(pattern.flags); // gy [order will be in (gimuy)]