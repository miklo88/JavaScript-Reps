const fourTitle = "///////////// THIS IS PAGE FOUR /////////////";
console.log(fourTitle);

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruits = ["apples", "pears", "oranges", "bananas"];

console.log(numbers);
// displaying all fruits
console.log(fruits);
// displaying the second fruit. remember that our array starts at 0
console.log(fruits[1]);
//adding a fruit strawberries, assigning it int 4 it adds onto the end of the array
fruits[4] = "strawberries";
// push adds on to the end of the array
fruits.push("mangos");
// unshift adds on to the beginning of an array
fruits.unshift("blueberries");
// pop pops off, removes the last item in the array. mangos should be removed
//if you uncomment the line below.
// fruits.pop();
// .isArray checks to see if it is an array. this should return true
console.log(Array.isArray(fruits));
// is an array but when passing a string returns false. this is not an array with strings
console.log(Array.isArray("string"));
// indexOf tells you what the index value of a certain fruit in the array is.
console.log(fruits.indexOf("bananas"));
/// simple console.log that shows all of the fruits.
console.log(fruits);
// reversing the order of the fruits
console.log(fruits.reverse(fruits));
