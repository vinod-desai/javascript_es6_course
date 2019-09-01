// let emp1 = { name: 'Josline' };
// let emp2 = { name: 'Vinod' };

// let employees = new Map();
// employees.set(emp1, 'Josline Vinod');
// employees.set(emp2, '143');
// console.log(employees.get(emp1)); // Josline Vinod
// console.log(employees);
/* 
Map {
    { name: 'Josline' } => 'Josline Vinod',
    { name: 'Vinod' } => '143' } */

let emp1 = { name: 'Josline' };
let emp2 = { name: 'Vinod' };
let employees = new WeakMap([
    [emp1, 'Josline Vinod'],
    [emp2, '143']
]);
emp1 = null;
console.log(employees.size); // undefined