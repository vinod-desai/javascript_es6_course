function Employee() {
    this.name = 'Josline',
    this.salary = 100000
};
let e = new Employee();
// let p = new Proxy(e, {
//     get: function(target, prop, receiver){
//         return 'Attempted access: ' + prop;
//     }
// });
// console.log(p.name); // Attempted access: name
// console.log(p.salary); // Attempted access: salary

// let p = new Proxy(e, {
//     get: function(target, prop, receiver){
//         return Reflect.get(target, prop, receiver);
//     }
// });
// console.log(p.name); // Josline
// console.log(p.salary); // 100000

// let p = new Proxy(e, {
//     get: function(target, prop, receiver){
//         if (prop === 'salary')
//         return 'You do not have access to Employee Salary';
//         return Reflect.get(target, prop, receiver);
//     }
// });
// console.log(p.name); // Josline
// console.log(p.salary); // You do not have access to Employee Salary

// function getId() {
//     return 77;
// }
// let p = new Proxy(getId, {
//     apply: function(target, thisArg, argumentList){
//         return Reflect.apply(target, thisArg, argumentList);
//     }
// });
// console.log(p); // [Function: getId]
// console.log(p()); // 77

// let t = {
//     tableId: 77
// };
// let p = new Proxy({}, {
//     get: function(target, prop, receiver){
//         return 'Property ' + prop + ' does not exist'; 
//     }
// });
// Object.setPrototypeOf(t, p);
// console.log(t.tableId); // 77
// console.log(t.size); // Property size does not exist

let t = {
    tableId: 77
};
let { proxy, revoke } = Proxy.revocable(t, {
    get: function(target, prop, receiver){
        return Reflect.get(target, prop, receiver) + 100; 
    }
});
console.log(t.tableId); // 77
console.log(proxy.tableId); // 177
revoke();
console.log(proxy.tableId); // TypeError: Cannot perform 'get' on a proxy that has been revoked