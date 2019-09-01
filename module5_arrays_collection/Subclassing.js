// class Perks extends Array {

// }
// let a = Perks.from([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// console.log(a instanceof Perks); // true
// console.log(a.length); // 3
// let b = a.reverse();
// console.log( b instanceof Perks); // true
// console.log( b instanceof Array); // true


class Perks extends Array {
    sum(){
        let total = 0;
        this.map(val => total = total + val);
        return total;
    }
}
let a = Perks.from([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log(a.sum()); // 275