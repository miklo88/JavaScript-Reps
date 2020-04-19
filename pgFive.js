const titleFive = "///////////// THIS IS PAGE FIVE /////////////";
console.log(titleFive);

// Object Literals - key value pairs

const character = {
  firstName: "Scooby",
  lastName: "Doo",
  age: 4,
  hobbies: ["eating", "sleeping", "scared"],
  address: {
    street: "50 main st",
    city: "Chicago",
    state: "MA",
  },
};
console.log(character);
console.log(character.firstName);
console.log(character.lastName, character.age);
console.log(character.hobbies[0]);
console.log(character.address.state);

//destructuring - creating variables
// think of pulling these out of the Object.
// like one cookie out of the jar at a time.
const {
  firstName,
  lastName,
  address: { city },
} = character;
console.log(firstName);
console.log(city);
// directly adding a property - uncomment to add an email to the character array.
// character.email = "scoob@mysterymachine.com";
// console.log(character);
