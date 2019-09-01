// let perks = new Set();
// perks.add('Car');
// perks.add('Bike');
// perks.add('Cycle');
// perks.add('Food');
// perks.add('Vacation');
// perks.add('Food');
// console.log(perks); // Set { 'Car', 'Bike', 'Cycle', 'Food', 'Vacation' }
// console.log(perks.size); // 5

// let persons = new Set([
//     'Josline',
//     'Vinod'
// ]);
// let a = new Set(persons);
// console.log(a); // Set { 'Josline', 'Vinod' }
// console.log(a.size); // 2
// console.log(a.has('Josline')); // true
// console.log(a.has('josline')); // false

// let persons = new Set([
//     'Josline',
//     'Vinod'
// ]);
// console.log(...persons.keys()); // Josline Vinod
// console.log(...persons.values()); // Josline Vinod
// console.log(...persons.entries()); // [ 'Josline', 'Josline' ] [ 'Vinod', 'Vinod' ]

// let objs = new Set([
//     { id: 100},
//     { id: 100}
// ]);
// console.log(objs); // Set { { id: 100 }, { id: 100 } }
// console.log(objs.size); // 2

// let perks = new Set([
//     1,
//     '1'
// ]);
// console.log(perks); // Set { 1, '1' }
// console.log(perks.size); // 2

// let perks = new WeakSet([1, 2, 3, 4, 5, 6, 7]);
// console.log(perks.size); // Runtime Error

let p1 = {1: '12345'}, p2 = {2: '6789'};
let perks = new WeakSet([p1, p2]);
console.log(perks); // WeakSet { [items unknown] }
console.log(perks.size); // undefined