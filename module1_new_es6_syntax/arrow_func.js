'use strict'
/* var getPrice = () => 5.99;
console.log(getPrice); // Function: getPrice
console.log(typeof getPrice); // function
console.log(getPrice()); // 5.99 */

/* var getPrice = (count) => count * 4.00;
console.log(getPrice(2)); // 8 */

/* var getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, 0.07)); // 8.56 */

/* document.addEventListener('click', function(){
    console.log(this); // #Document
}) */

/* document.addEventListener('click', () => {
    console.log(this); // Window {....} // this is binded to the global context
}) */

/* var invoice = {
    number: 123,
    process: function (){
        console.log(this);
    }
};
invoice.process(); // { number: 123, process: [Function: process] } */

/* var invoice = {
    number: 123,
    process:  () => console.log(this)
};
invoice.process(); // {} --> Window{...} ---> global window context/if we are in function then its context */

/* var invoice = {
    number: 123,
    process:  function () {
       return () => console.log(this)
    }
};
invoice.process()(); // { number: 123, process: [Function: process] } */

/* var invoice = {
    number: 123,
    process:  function () {
       return () => console.log(this.number)
    }
};
var newInvoice = {
    number: 456
}
invoice.process().bind(newInvoice)(); // 123, with arrow func we can't change the value of 'this' with bind/call/apply */

/* var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype')); // false */

var getPrice = function(){
    return 5.99;
};
console.log(getPrice.hasOwnProperty('prototype')); // true 