// let title = 'Welcome to India';
// console.log(title.startsWith('welcome')); // false
// console.log(title.startsWith('Welcome')); // true
// console.log(title.endsWith('india')); // false
// console.log(title.endsWith('India')); // true
// console.log(title.includes('come')); // true

// let title = "Surfer's \u{1f3c4} Blog";
// console.log(title); // Surfer's �🏄 Blog

// let surfer = "\u{1f3c4}";
// console.log(`${surfer}  ${surfer.length}`); // �🏄 2
// console.log(surfer.length); // 2


// let surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
// console.log(Array.from(surfer).length); // 3
// console.log(surfer.length); // 6
// console.log(surfer); // ���🏄🐋🐋

// var title = "Mazatla\u0301n";
// console.log(title + ' ' + title.length); // Mazatlán 9

// var title = "Mazatla\u0301n";
// console.log(title + ' ' + title.normalize().length); // Mazatlán 8

// var title = "Mazatla\u0301n";
// console.log(title.normalize().codePointAt(7).toString(16)); // 6e

// console.log(String.fromCodePoint(0x1f3c4)); // 🏄

// let title = 'Surfer';
// let output = String.raw `${title} \u{1f3c4}\n`; 
// console.log(output); // Surfer \u{1f3c4}\n

let wave = '\u{1f30a}';
console.log(wave.repeat(10)); // ����������