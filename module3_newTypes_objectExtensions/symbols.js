// Symbols are completely unique identifiers. Just like their primitive counterparts (Number, String, Boolean), 
// they can be created using the factory function Symbol() which returns a Symbol. 
// Every time you call the factory function, a new and unique symbol is created.

// let eventSymbol = Symbol('resize event');
// console.log(typeof eventSymbol); // symbol
// console.log(eventSymbol.toString()); // Symbol(resize event)

// let s1 = Symbol('event');
// let s2 = Symbol('event');
// console.log(s1 === s2); // false

// let s = Symbol.for('event');
// console.log(s.toString()); // Symbol(event)

// let s1 = Symbol.for('event');
// let s2 = Symbol.for('event');
// console.log(s1 === s2); // true

// let s1 = Symbol.for('event1');
// let s2 = Symbol.for('event2');
// console.log(s1 === s2); // false

// let s1 = Symbol.for('event');
// let description = Symbol.keyFor(s1);
// console.log(description); // event

// let article = {
//     title: 'My Article Title',
//     [Symbol.for('article')]: 'My Article'
// };
// let value = article[Symbol.for('article')];
// console.log(value); // My Article

// let article = {
//     title: 'My Article Title',
//     [Symbol.for('article')]: 'My Article'
// };
// console.log(Object.getOwnPropertyNames(article)); // [ 'title' ]
// console.log(Object.getOwnPropertySymbols(article)); // [ Symbol(article) ]





