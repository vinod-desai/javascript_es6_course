// let ids = [9000, 9001, 9002];
// console.log(typeof ids[Symbol.iterator]); // function

// let ids = [9000, 9001, 9002];
// let it = ids[Symbol.iterator]();
// console.log(it.next()); // { value: 9000, done: false }

// let ids = [9000, 9001, 9002];
// let it = ids[Symbol.iterator]();
// it.next();
// it.next();
// console.log(it.next()); // { value: 9002, done: false }

// let ids = [9000, 9001, 9002];
// let it = ids[Symbol.iterator]();
// it.next();
// it.next();
// it.next();
// console.log(it.next()); // { value: undefined, done: true }

// let idMaker = {
//     [Symbol.iterator] () {
//         let nextId = 9000;
//         return {
//             next() {
//                return {
//                     value: nextId++,
//                     done: false
//                 };
//             }
//         }
//     }
// };
// let it = idMaker[Symbol.iterator]();
// console.log(it.next().value); // 9000
// console.log(it.next().value); // 9000

// let a = 9000;
// let b = a++;
// console.log(b) // 9000

// let a = 9000;
// let b = ++a;
// console.log(b) // 9001