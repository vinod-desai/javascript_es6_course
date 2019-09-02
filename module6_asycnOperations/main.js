const people = [
    { name: 'Josline', gender: 'Female'},
    { name: 'Mouni', gender: 'Female'},
    { name: 'Ramya', gender: 'Female'},
    { name: 'Kajal', gender: 'Female'},
    { name: 'Selena', gender: 'Female'}
];

// Call Back
// function getPeople() {
//     setTimeout(() => {
//         let output = '<ul>';
//         people.forEach((p) => {
//             output += `
//                 <li>${p.name}</li>
//             `;
//         });
//         output += '</ul>';
//         document.body.innerHTML = output;
//     }, 500);
// }

// function addPerson(person, callBack) {
//     setTimeout(() => {
//         people.push(person);
//         callBack();
//     }, 1600);
// }

// // getPeople();
// addPerson({ name: 'Taylor Swift', gender: 'Female'}, getPeople);

// Promises
function getPeople() {
    setTimeout(() => {
        let output = '<ul>';
        people.forEach((p) => {
            output += `
                <li>${p.name}</li>
            `;
        });
        output += '</ul>';
        document.body.innerHTML = output;
    }, 500);
}

function addPerson(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            people.push(person);
            let error = false;
        if(!error){
            resolve();
        } else {
            reject('Something went wrong');
        }
        }, 1600);
    });
   
}

// addPerson({ name: 'Taylor Swift', gender: 'Female'})
// .then(getPeople)
// .catch(err => console.log(err));

// const p1 = Promise.resolve('Hello Josline');
// const p2 = 143;
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1430, 'I Love You');
// });
// const p4 = fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json());

// Promise.all([p1, p2, p3, p4]).then( value => console.log(value));

// Async Await
// async function init() {
//     await addPerson({ name: 'Taylor Swift', gender: 'Female'});
//     getPeople();
// }
// init();

async function fetchAlbums() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();
    console.log(data);
}
fetchAlbums();