const titleSix = "///////////// THIS IS PAGE SIX /////////////";
console.log(titleSix);

/////// ARRAY OF OBJECTS
const todos = [
  {
    id: 1,
    text: "cook dinner",
    isCompleted: false,
  },
  {
    id: 2,
    text: "phone interview Tuesday",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Study JavaScript",
    isCompleted: true,
  },
];
/// practice pulling info out of the three objects in the array.
console.log(todos);
console.log(todos[1].text);

/////////object literals   https://www.freeformatter.com/json-formatter.html
//// doing this converts the array object into JSON so you can send it to a server.
//This is how you send data to a server.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// //////////////////////////////FOR & WHILE LOOPIN LOOPS
// lets break this down. You pass in three parameters. (in here)
// The first being the assignment iterator. (let i = 0;
// Second will be the condition that will be met. i < 10; i is less than 10
// Third is the increment i++) Just adding one for the moment.
// This loop will run until i < 10 is true. So the loop iterates 1,2,3,4,5,6,7,8,9 then stops because 10 is not less than 10.
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// !mirame!, a template string has appeared again :)
for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

//While loops - only real difference here is the variable is rendered outside of the loop.
// and be careful this can become a never ending loop. Thus why you condition the i.
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}
/// now looping through our todos array
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}
/// cleaning it up DRY 2020
for (let todo of todos) {
  console.log(todo.id);
}
// ////////////////////////////// now moving into es6 HIGHER ORDER ARRAY METHODS
//forEach basically a new and improved for loop. A lot easier to use no? ;)
todos.forEach(function (todo) {
  console.log(todo);
});
// map - map loops over the array oject and returns a whole new array of what is specified in the object.
// grabbing just the todo.isCompleted from the objects
const todoBoolean = todos.map(function (todo) {
  return todo.isCompleted;
});
console.log(todoBoolean);
//arrow => function
const todoText = todos.map((todo) => {
  return todo.text;
});
console.log(todoText);
///filter as the name implies we just want to filter out whatever it is out of the objects in the array.
// here we're just returning the todos that were completed.
// const todoFilter = todos.filter(function (todo) {
//   return todo.isCompleted == true;
// });
// console.log(todoFilter);
// here were seeing the functional programming come out and the power. chaining on the .map to our filter gives us a new array of todos that are completed.
const todoFilter = todos
  .filter(function (todo) {
    return todo.isCompleted == true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoFilter);
