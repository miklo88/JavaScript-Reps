const titleThree = "//////////// THIS IS PAGE THREE /////////////";
console.log(titleThree);
/// String properties, methods, variables
const s = "Hi Ya'll";
//let the madness begin
//length of the string in s
console.log(s.length);
// changes all characters in s to lowercase
console.log(s.toLowerCase());
// changes all characters in s to UPPERCASE
console.log(s.toUpperCase());
// cuts the characters at the 5th position.
// H=0,i=1,''=3,Y=4,a=5,'=6,l=7,l=8 {Hi Ya'll}
console.log(s.substring(0, 5));
// chainging methods together
console.log(s.substring(0, 3).toUpperCase());
// returns the object as an array. In the console
//you'll be able to see it gives you the length and itemized each character
//also the endless list of other methods you can use for the s variable.
console.log(s.split(""));
//another example where you can break up each item in the array.
const ingredients = "tomatoes, macaroni, garlic, onion, salt, pepper";
console.log(ingredients.split(", "));
// then you'll be able to see in the console each item is now separated in our array.
