'use strict'
// Rest
/* var showCategories = function (productID, ...categories){
    // console.log(categories instanceof Array);
    console.log(categories);
}
// showCategories(123, 'search', 'advertising'); // true
// showCategories(123, 'search', 'advertising'); // [ 'search', 'advertising' ]
// showCategories(); // []

// console.log(showCategories.length); // 1 -- function parameter length */

/* var showCategories = function (productID, ...categories){
    console.log(arguments.length);
}
showCategories(123, 'search', 'advertising'); // 3 arguments */

/* var showCategories = new Function('...categories', 'return categories;');
console.log(showCategories('search', 'ads')); // [ 'search', 'ads' ] */

// Spread
/* var prices = [10, 25, 20];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // 25 */

/* var prices = [10, 25, 20];
var newPriceArray = [...prices];
console.log(newPriceArray); // [ 10, 25, 20 ] */

/* var newPriceArray = Array(...[,,]);
console.log(newPriceArray); // [ undefined, undefined ]

var newPriceArray = [...[,,]];
console.log(newPriceArray); // [ undefined, undefined ] */

/* var maxCode = Math.max(..."43210");
console.log(maxCode); // 4

var maxCode = Math.max(..."AbCDE");
console.log(maxCode); // NaN */

var codeArray = ['A', ..."BCD", "E"];
console.log(codeArray); // [ 'A', 'B', 'C', 'D', 'E' ]