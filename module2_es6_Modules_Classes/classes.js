// class Task {

// }
// console.log(typeof Task); // function

// class Task {

// }
// let task = new Task();
// console.log(typeof task); // object
// console.log(task instanceof Task); // true

// class Task {
//     showId() {
//         console.log('99');
//     }
// }
// let task = new Task();
// console.log(task.showId === Task.prototype.showId); // true

// class Task {
//     constructor() {
//         console.log('I am a Task Class Constructor');
//     }
//     showId() {
//         console.log('99');
//     }
// }
// let task = new Task(); // I am a Task Class Constructor

// let task = new Task(); // Error use before declaration
// class Task {
//     constructor() {
//         console.log('I am a Task Class Constructor');
//     }
//     showId() {
//         console.log('99');
//     }
// }

// let newClass = class Task {
//     constructor() {
//         console.log('I am a Task Class Constructor');
//     }
//     showId() {
//         console.log('99');
//     }
// }
// new newClass(); // I am a Task Class Constructor

// function Project () { };
// console.log(window.Project === Project) // true

// class Project { };
// console.log(window.Project === Project) // false, classes does not pollute global object space

// class Project {
//     constructor(){
//         console.log('Project Class Constructor');
//     }
//  }

//  class SoftwareProject extends Project {

//  }
// let p = new SoftwareProject(); // Project Class Constructor


// class Project {
//     constructor(name){
//         console.log('Project Class Constructor ' + name);
//     }
//  }

//  class SoftwareProject extends Project {

//  }
// let p = new SoftwareProject('Software'); // Project Class Constructor Software

// class Project {
//     constructor(name){
//         console.log('Project Class Constructor ' + name);
//     }
//  }

//  class SoftwareProject extends Project {
//     constructor(){
//         super();
//         console.log('Software Project Class Constructor');
//     }
//  }
// let p = new SoftwareProject(); // Project Class Constructor, Software Project Class Constructor

// class Project {
//     constructor(name){
//         console.log('Project Class Constructor ' + name);
//     }
//  }

//  class SoftwareProject extends Project {
//     constructor(){
//         // super();
//         console.log('Software Project Class Constructor');
//     }
//  }
// let p = new SoftwareProject(); // ReferenceError: this is not defined


// class Project {
//     getTaskCount() {
//         return 10;
//     }
//  }

//  class SoftwareProject extends Project {
//     getTaskCount() {
//         return super.getTaskCount() + 6;
//     }
//  }
// let p = new SoftwareProject();
// console.log(p.getTaskCount()); // 16

// let project = {
//     getTaskCount() {
//         return 10;
//     }
// }
// let softwareProject = {
//     getTaskCount() {
//         return super.getTaskCount() + 6;
//     }
// }
// Object.setPrototypeOf(softwareProject, project);
// console.log(softwareProject.getTaskCount()); // 16

// class Project {
//     static getProjectId() {
//         return 7;
//     }
// }
// console.log(Project.getProjectId()); // 7

// class Project {
//     static getProjectId() {
//         return 7;
//     }
// }
// let p = new Project();
// console.log(p.getProjectId()); // Error, Object does not have getProjectId method

// class Project {
//     static  id = 7;
// }
// console.log(Project.id); // error

// class Project {
// }
// Project.id = 7
// console.log(Project.id); // 7

// class Project {
//     constructor() {
//         console.log(new.target); // function
//         console.log(typeof new.target); // constructor() { console.log(new.target); // function console.log(typeof new.target); }
//     }
// }
// var p = new Project();


// class Project {
//     constructor(){
//         console.log(new.target); // constructor(){ super(); }
//     }
// }
// class softwareProject extends Project {
//     constructor(){
//         super();
//     }
// }
// let p = new softwareProject();

// class Project{
//     constructor(){
//         console.log(new.target); // constructor(...args){ super(...args); }
//     }
// }
// class softwareProject extends Project {
// }
// let p = new softwareProject();

class Project{
    constructor(){
        console.log(new.target.getDefaultId()); // 7
    }
}
class softwareProject extends Project {
    static getDefaultId() {
        return 7;
    }
}
let p = new softwareProject();
