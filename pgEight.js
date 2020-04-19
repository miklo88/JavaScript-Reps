const titleEight = "//////////// THIS IS PAGE EIGHT /////////////";
console.log(titleEight);

////////////// FUNCTIONS

// basic mathematical function. in the parenthesese you can pass parameters. ex. num1, num2
function addNums(num1, num2) {
  // console.loggin num1 + num2 (our parameters)
  console.log(num1 + num2);
}
// to invoke the function ya gotta pass some values to those parameters. ex 5,4
addNums(5, 4); // 5 + 4 = 9

/// usually you don't console log a function. within its scope, you return instead.
function subtractNums(num1, num2) {
  return num1 - num2;
}
/// then you console log the function with values for your params to execute it.
console.log(subtractNums(9, 5)); // 4

////////ARROW FUNCTIONS
// cleans everything up. introduced in 2015 ES6 - going to clean up our previous function subractNums
const subractNums = (num1, num2) => num1 - num2;
console.log(subtractNums(30, 19));
// couple things. the return is gone because this is just one expression we're passing.
// no variables being assigned etc. even the curly braces can be dropped as well. This is a great thing to do
// for any of the higher order array methods.
