// const titleNine = "///////////// THIS IS PAGE NINE /////////////";
// console.log(titleNine);
const titleNine = () => "///////////// THIS IS PAGE NINE /////////////";
console.log(titleNine());
/////// OBJECT ORIENTED PROGRAMMING

/////// constructor function - all constructor functions need to start with a capital.
function Soldier(firstName, lastName, dob) {
  // setting properties to the oject. ex .this
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.dob = dob;
  // adding new Date(dob) date method you can pull more information from the date object.
  this.dob = new Date(dob);
  /// adding methods(functions) to this person object. ex .getBirthYear .getFullName
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
/// prototypes
Soldier.prototype.getBrithYear = function () {
  return this.dob.getFullYear();
};
Soldier.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
//// es6 classes aka syntatic sugar. this class does the same thing as the code above. just a lot cleaner.
// developers from other backgrounds can transition into JavaScript easier with this new pizzazz. "jazz hands"
// class Soldier {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
///////////////////////// es6 class

// Instantiate object
// creating as many different soldiers based off of our constructor function soldier object.
const soldier1 = new Soldier("Carlos", "Concepcion", "4-4-1960");
const soldier2 = new Soldier("Elsa", "Concepcion", "11-17-1940");

// console.log(soldier1);
// console.log(soldier1.dob.getFullYear());
// console.log(soldier1.dob.getTime()); // playin around with the new Date methods.
// console.log(soldier2); // reg return with new Date(dob)

/// calling methods in the constructor function object.
console.log(soldier1.getBirthYear());
console.log(soldier1.getFullName());
console.log(soldier1);
console.log(soldier2.getBirthYear());
console.log(soldier2.getFullName());
console.log(soldier2);
