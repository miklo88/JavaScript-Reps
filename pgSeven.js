const pgSeven = "///////////// THIS IS PAGE SEVEN /////////////";
console.log(pgSeven);

///// Conditionals
// == means equal to data but not a specific match. actually a hot mess in my opinion.
// === means equal to data type. a specific match
// || means 'or'
// && means 'and'
// ? aka 'if' means 'ternary operator' a shorthand if statement. usually followed by : aka 'else'
//used a lot to assign variables assigned to a condition.

const x = 10;
// // const x = 20;
// // const x = 2;

//multiple conditions
const y = 16;
////// this is cleaner! DRY 2020 with || or conditional
// if (x > 5 || y > 15) {
//   console.log("x is more than 5 and/or y is more than 15");
// }
// this is cleaner! DRY 2020 with && and conditional
if (x > 5 && y > 15) {
  console.log("x is more than 5 and/or y is more than 15");
}
// //seeing if x is equal to 10. the value x is assigned above
// if (x === 10) {
//   console.log("x is 10");
//   // seeing if x is greater than 10. the value x is assigned above
// } else if (x > 10) {
//   console.log("x is greater than 10");
//   // if x is not 10 or greater than. the value x is assigned above
// } else {
//   console.log("x is NOT 10");
// }

//ternary operator if value is
// const c = 5;
const c = 50;
const color = c > 10 ? "red" : "blue";

console.log(color);
