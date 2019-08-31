// import { projectID, projectName } from 'module1.js'

// console.log(`${projectName} has id: ${projectID}`);

//console.log('starting in base');
// import { projectID } from 'module1.js'; // import statement gets hoisted
// console.log('ending in base'); // Output: in module 1, starting in base, ending in base

// import someValue from 'module1.js'
// console.log(someValue); // BuildIt

// import { default as myProjectName} from 'module1.js'
// console.log(myProjectName); // BuildIt

// import someValue from 'module1.js';
// console.log(someValue); // undefined

// import someValue from 'module1.js';
// console.log(someValue); // 99

// import * as values from 'module.js';
// console.log(values); // { projectID : 99, projectName: 'BuildIt'}

// import { projectID } from 'module1.js';
// projectID = 1000;
// console.log(projectID); // Runtime error

import { project } from 'module1.js';
project.projectID = 1000;
console.log(project.projectID); // 1000

