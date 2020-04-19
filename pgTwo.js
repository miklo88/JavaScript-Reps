// String, Numbers, Boolean, null, undefined
const titleTwo = "///////////// THIS IS PAGE TWO /////////////";
console.log(titleTwo);
// the name Will is an example of a string
const name = "Carl";
// the age 30 is an example of a number
const age = 31;
// isCool = true is a true boolean, false is used as well
const isCool = true;
//decimal is just a number in JavaScript
const rating = 7.5;
// null is a variable with nothin in it. It's vacant
const x = null;
// undefined
const y = undefined;
let z;
// invoking all variables in the console in your browser. typeof tells you what type of variable youre using.
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation /////
// OLD SCHOOL
console.log("my name is " + name + " and I am " + age);
// ES6 2015 Template String // second line below as a variable
// console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
