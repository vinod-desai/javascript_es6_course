'use strict'
/* var getProduct = function (productID = 1000){
    console.log(productID);
}
// getProduct(); // 1000
getProduct(123); // 123 */

/* var getProduct = function (productID = 1000, type = 'Software'){
    console.log(productID + ' ,' + type);
}
getProduct(undefined, 'Hardware'); // 1000 , Hardware ---> If we specify undefined, JS uses default param value */

/* var getTotal = function(price, tax=0.07){
    console.log(arguments.length);
}
getTotal(5.00); // 1 */

/* var getTotal = function(price = adjustment, adjustment = 1){ // ReferenceError: adjustment is not defined
    console.log(price + adjustment);
}
// getTotal(5.00); // 6
getTotal(); */

/* var getTotal = new Function('price = 20.00', 'return price;'); // Dynamic Function
console.log(getTotal()); // 20 */



