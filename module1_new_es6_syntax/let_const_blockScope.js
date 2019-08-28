'use strict'
// console.log(productID); // undefined -> Only variable productID is get hoisted but not its value
// var productID = 123;

// console.log(productID); // ReferenceError: productID is not defined
// let productID = 123; // No hoisting takes place for variables defined with let keyword

// let productID = 123;
// console.log(productID); // 123

// let productID;
// console.log(productID); // undefined

/* let productID = 123;
{
    let productID = 456;
}
console.log(productID); // 123 */

/* {
    let productID = 456;
}
console.log(productID); // ReferenceError: productID is not defined */

/* function updateProductID(){
    productID = 123;
}
let productID = null;
updateProductID();
console.log(productID); // 123 */

/* let productID = 123;
for(let productID = 0; productID<10; productID++){

}
console.log(productID); // 123 */

/* let updateFunc = [];
for(var i=0; i<2; i++){
    updateFunc.push(function(){ return i}); // var has function scope
}
console.log(updateFunc[0]()); // 2 */

/* let updateFunc = [];
for(let i=0; i<2; i++){
    updateFunc.push(function(){ return i}); // let has block scope
}
console.log(updateFunc[1]()); // 1 */

/* const MARKUP_PCT = 100;
console.log(MARKUP_PCT); // 100 */

/* const MARKUP_PCT; // SyntaxError: Missing initializer in const declaration
console.log(MARKUP_PCT); */

/* const MARKUP_PCT = 100;
MARKUP_PCT = 125; // TypeError: Assignment to constant variable.
console.log(MARKUP_PCT); */

/* const MARKUP_PCT = 100;
if (MARKUP_PCT > 0){
    const MARKUP_PCT = 125; // variables defined with const has block scope
}
console.log(MARKUP_PCT); */

