// let a = {
//     x: 1
// };
// let b = {
//     y: 2
// };
// Object.setPrototypeOf(a, b);
// console.log(a.y); // 2

// let a = { a: 1}, b = { b: 2};
// let target = {};
// Object.assign(target, a, b);
// console.log(target); // { a: 1, b: 2 }

// let a = { a: 1}, b = { a: 5, b: 2};
// let target = {};
// Object.assign(target, a, b);
// console.log(target); // { a: 5, b: 2 }

// let a = { a: 1}, b = { a: 5, b: 2};
// Object.defineProperty(b, 'c', {
//     value: 10,
//     enumerable: false
// });
// let target = {};
// Object.assign(target, a, b);
// console.log(target); // { a: 5, b: 2 }


// let amount = NaN;
// console.log( amount === amount); // false

// let amount = NaN;
// console.log(Object.is(amount, amount)); // true


let amount = 0, total = -0;
console.log( amount === total) // true
console.log(Object.is(amount, total)); // false