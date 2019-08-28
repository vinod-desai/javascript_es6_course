'use strict'
let salary = [10000, 50000, 160000];
// let [low, average, high, Xhigh] = salary;
// console.log(`${low} ${average} ${high} ${Xhigh}`); // Xhigh = undefined

// let [low, , high] = salary;
// console.log(`${low} ${high}`); // 10000 160000

// let [low, ...remaining] = salary;
// console.log(`${remaining}`); //50000,160000 -- array

// let [low, medium, high, Xhigh = 170000] = salary;
// console.log(`${Xhigh}`); // 170000

// let salary1 = [10000, 50000, [160000, 200000]];
// let [low, medium, [high, Xhigh]] = salary1;
// console.log(`${Xhigh}`); //200000

/* function reviewSalary([low, avg], high = '1000000'){
    console.log(low);
    console.log(avg);
    console.log(high);
}
reviewSalary([160000, 700000]); */

let salary2 = {
    low: '150000',
    avg: '160000',
    high:'2500000'
}
// let { low, avg, high} = salary2;
// console.log(low); // 150000

/* let newLow, newAvg, newHigh;
{ low: newLow, avg: newAvg, high: newHigh} = salary2; //SyntaxError: Unexpected token :
console.log(newHigh); */

/* let newLow, newAvg, newHigh;
({ low: newLow, avg: newAvg, high: newHigh} = salary2);
console.log(newHigh); // 2500000 */

let [maxCode, minCode] = 'AZ';
console.log(`${minCode} ${maxCode}`);// Z A

/* let [high, low] = [,]; // [,] has one element
console.log(`${high} ${low}`); // undefined undefined */

/* let [high, low] = undefined; // TypeError: undefined is not iterable
console.log(`${high} ${low}`); */

/* let [high, low] = null; // TypeError: null is not iterable
console.log(`${high} ${low}`); */

/* for(let [a, b] of [[5, 10]]){
    console.log(`${a} ${b}`); // a=5 b=10
} */

let count = 0;
for(let [a, b] of [[5, 10]]){
    console.log(`${a} ${b}`);
    count++;
}
console.log(count); // 1
