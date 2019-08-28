'use strict'
/* let invoiceNum = 16;
console.log(`Invoice Number ${invoiceNum}`); // Invoice Number 16
console.log(`Invoice Number: \${invoiceNum}`); // Invoice Number: ${invoiceNum}
console.log(`Invoice Number ${"INV-" + invoiceNum}`); // Invoice Number INV-16

let message = `A
B
C`;
console.log(message); // new lines, tabs are retained */

/* function showMesssage(message){
    let invoiceNum = 99;
    console.log(message);
}
let invoiceNum = 1600;
showMesssage(`Invoice Number: ${invoiceNum}`); // Interpolation takes place first before function call - Invoice Number: 1600 */

/* function processInvoice(segments){
    console.log(segments);
}
processInvoice `template`; // [ 'template' ] */

function processInvoice(segments, ...values){
    console.log(segments);
    console.log(values);
}
let invoiceNum = 1600;
let amount = '2000';
processInvoice `Invoice: ${invoiceNum} for ${amount}`; // [ 'Invoice: ', ' for ', '' ] [ 1600, '2000' ]