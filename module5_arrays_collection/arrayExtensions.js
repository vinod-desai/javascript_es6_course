// let salaries = Array(90000);
// console.log(salaries.length); // 90000

// let salaries = Array.of(90000);
// console.log(salaries[0]); // 90000
// console.log(salaries.length); // 1

// let salaries = [810, 820, 830,];
// let amounts = Array.from(salaries, v => v+100);
// console.log(amounts); // [ 910, 920, 930 ]

// let salaries = [810, 820, 830,];
// let amounts = salaries.fill(100);
// console.log(salaries); // [ 100, 100, 100 ]
// console.log(amounts); // [ 100, 100, 100 ]

// let salaries = [810, 820, 830,];
// console.log(salaries.find(val => val >= 820)); // 820


// let salaries = [810, 820, 830,];
// console.log(salaries.copyWithin(2, 1)); // [ 810, 820, 820 ]

// let salaries = [1, 2, 3, 4, 5];
// console.log(salaries.copyWithin(0, 1)); // [ 2, 3, 4, 5, 5 ]

// let ids = ['A', 'B', 'C'];
// console.log(...ids.entries()); // [ 0, 'A' ] [ 1, 'B' ] [ 2, 'C' ]
// console.log(...ids.keys()); // 0 1 2
// console.log(...ids.values()); // A B C

// let buffer = new ArrayBuffer(1024);
// buffer[0] = 0xff;
// console.log(buffer[0]); // 255

// let buffer = new ArrayBuffer(1024);
// let a = new Int8Array(buffer);
// a[0] = 0xff;
// console.log(a[0]); // -1

// let buffer = new ArrayBuffer(1024);
// let a = new Uint8Array(buffer);
// a[0] = 0xff;
// console.log(a[0]); // 255

// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer);
// console.log(dv.byteLength); // 1024

// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer, 0, 32);
// console.log(dv.byteLength); // 32


// let buffer = new ArrayBuffer(1024);
// let dv = new DataView(buffer);
// dv.setInt8(0, 1);
// console.log(dv.getUint16(0)); // 256

let buffer = new ArrayBuffer(1024);
let dv = new DataView(buffer);
dv.setInt8(0, 1);
console.log(dv.getUint16(0, true)); // 1