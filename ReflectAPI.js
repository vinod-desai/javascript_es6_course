console.log(typeof Reflect); // object

// class Restuarant {

// }
// let r = Reflect.construct(Restuarant);
// console.log(r instanceof Restuarant); // true

// class Restuarant {
//     constructor(nameW, nameH){
//         console.log(`${nameW} ${nameH}`); // Josline Vinod
//     }
// }
// let r = Reflect.construct(Restuarant, ['Josline', 'Vinod']);

// class Restuarant {
//     constructor() {
//         console.log(`new target: ${new.target}`);
//     }
// }
// function restuarantMaker () {
//     console.log('In RestauarantMaker');
// }
// let r = Reflect.construct(Restuarant, ['Josline', 'Vinod'], restuarantMaker);
/* 
new target: function restuarantMaker () {
    console.log('In RestauarantMaker');
}
*/

// class Restauarant {
//     constructor(){
//         this.id = 12345;
//     }
//     show(){
//         console.log(`${this.id}`); // 99
//     }
// }
// Reflect.apply(Restauarant.prototype.show, { id: 99}); 

// class Location {
//     constructor() {
//         console.log('Location Class Constructor');
//     }
// }
// class Restauarant extends Location {

// }
// console.log(Reflect.getPrototypeOf(Restauarant)); // [Function: Location]

// class Restauarant {
//     constructor() {
//         this.id = 100;
//     }
// }
// let r = new Restauarant();
// console.log(Reflect.get(r, 'id')); // 100

// class Restauarant {
//     constructor() {
//         this._id = 100;
//     }
//     get id(){
//         return this._id;
//     }
// }
// let r = new Restauarant();
// console.log(Reflect.get(r, 'id', {_id: 11})); // 11

