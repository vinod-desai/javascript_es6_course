'use strict'
/* var price = 5.99, qnty = 10;
var productView = {
    price,
    qnty
}
console.log(productView); // { price: 5.99, qnty: 10 } */

/* var price = 5.99, qnty = 10;
var productView = {
    price,
    qnty,
    calulateValue(){
        return this.price * this.qnty
    }
}
console.log(productView.calulateValue()); // 59.900000000000006 */

/* var price = 5.99, qnty = 10;
var productView = {
    price,
    qnty,
    "calulate Value"(){
        return this.price * this.qnty
    }
}
console.log(productView['calulate Value']()); // 59.900000000000006 */

/* var field = 'dynamicField';
var price = 5.99;
var productView = {
    [field]: price
}
console.log(productView); // { dynamicField: 5.99 } */

/* var field = 'dynamicField';
var price = 5.99;
var productView = {
    [field + '001']: price
}
console.log(productView); // { dynamicField001: 5.99 } */

/* var method = 'doIt';
var productView = {
    [method + '-001'](){
        console.log('in a method');
    }
}
// console.log(productView); // { 'doIt-001': [Function: doIt-001] }
productView['doIt-001'](); // in a method */

var ident = 'productId';
var productView = {
    get [ident] (){ return true; },
    set [ident] (value){ }
}
console.log(productView.productId); // true