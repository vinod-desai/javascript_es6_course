// function doAsync(){
//     let p = new Promise(function(resolve, reject){
//         console.log('In Promise');
//         setTimeout(function(){
//             console.log('resolving...');
//             resolve();
//         }, 2000);
//     });
//     return p;
// }
// let promise = doAsync();
// console.log(`promise... ${promise}`);

// function doAsync(){
//     let p = new Promise(function(resolve, reject){
//         console.log('In Promise');
//         setTimeout(function(){
//             console.log('rejecting...');
//             reject();
//         }, 2000);
//     });
//     return p;
// }
// let promise = doAsync();
// console.log(`promise... ${promise}`);

// function doAsync(){
//     return Promise.resolve('Some Data');
// }
// doAsync().then(
//     (value) => { console.log(`Resolved: ${value}`); },
//     (err) => { console.log(`Rejected: ${err}`) }
// ); // Resolved: Some Data

function doAsync(){
    return Promise.reject('Some Error');
}
doAsync().then(
    (value) => { console.log(`Resolved: ${value}`); },
    (err) => { console.log(`Rejected: ${err}`) }
); // Rejected: Some Error

Promise.all([p1, p2]); // waits till all promises are resolved, if anyone promise gets rejected then the specified callback fn gets executed
Promise.race([p1, p2]); // if anyone promise gets resolved/rejected, the specified callback function gets called