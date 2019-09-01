// function *process() {
//     yield 8000;
//     yield 8001;
// }
// let it = process();
// console.log(it); // Object [Generator] {}
// console.log(it.next()); // { value: 8000, done: false }
// console.log(it.next()); // { value: 8001, done: false }
// console.log(it.next()); // { value: undefined, done: true }
// console.log(it.next()); // { value: undefined, done: true }


// function *process() {
//     let nextId = 9000;
//     while (true)
//     yield nextId++;
// }
// let it = process();
// console.log(it); // Object [Generator] {}
// console.log(it.next()); // { value: 9000, done: false }
// console.log(it.next()); // { value: 9001, done: false }
// console.log(it.next()); // { value: 9002, done: true }
// console.log(it.next()); // { value: 9003, done: true }

// function *process() {
//     let nextId = 9000;
//     while (true)
//     yield nextId++;
// }
// for (let id of process()){
//     if(id > 9010) break;
//     console.log(id);
// }

// function *process() {
//     yield;
// }
// let it = process();
// console.log(it.next()); // { value: undefined, done: false }

// function *process() {
//     let result = yield;
//     console.log(`result is ${result}`);
// }
// let it = process();
// console.log(it.next()); // { value: undefined, done: false }
// console.log(it.next(200)); // result is 200, { value: undefined, done: true }

// function * process() {
//     let newArray = [yield, yield, yield];
//     console.log(newArray[2]);
// }
// let it = process();
// it.next();
// it.next(2);
// it.next(4);
// it.next(6);
// // displays 6

// function *process() {
//     yield 42;
//     yield [1, 2, 3];
// }
// let it = process();
// console.log(it.next()); // { value: 42, done: false }
// console.log(it.next()); // { value: [ 1, 2, 3 ], done: false }
// console.log(it.next()); // { value: undefined, done: true }
// console.log(it.next()); // { value: undefined, done: true }

// function *process() {
//     yield 42;
//     yield* [1, 2, 3];
// }
// let it = process();
// console.log(it.next()); // { value: 42, done: false }
// console.log(it.next()); // { value: 1, done: false }
// console.log(it.next()); // { value: 2, done: false }
// console.log(it.next()); // { value: 3, done: false }
// console.log(it.next()); // { value: undefined, done: true }

// function *process(){
//     try {
//         yield 9000;
//         yield 9001;
//         yield 9002;
//     }
//     catch (e){
//         console.log(e);
//     }
// }
// let it = process();
// console.log(it.next()); // { value: 9000, done: false }
// console.log(it.throw('foo')); // foo, 
// console.log(it.next()); // { value: undefined, done: true }, { value: undefined, done: true }

// function *process(){
   
//         yield 9000;
//         yield 9001;
//         yield 9002;
// }
// let it = process();
// console.log(it.next()); // { value: 9000, done: false }
// console.log(it.throw('foo')); // Exception: foo
// console.log(it.next());


function *process(){
   
    yield 9000;
    yield 9001;
    yield 9002;
    
}
let it = process();
console.log(it.next()); // { value: 9000, done: false }
console.log(it.return('foo')); // { value: 'foo', done: true }
console.log(it.next()); // { value: undefined, done: true }

