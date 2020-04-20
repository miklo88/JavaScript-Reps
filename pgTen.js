const titleTen = () => "///////////// THIS IS PAGE TEN /////////////";
console.log(titleTen());
// ///// DOM manipulation

// ///////////////// selecting elements from the DOM
// Single Element
// grabbing the form
console.log(document.getElementById("form-ten"));
console.log(document.querySelector("h1"));

// Multiple Element
// querySelectorAll is the most common and versitile. most likelyl wont ever use anything else after that.
console.log(document.querySelectorAll("h1"));

/////////// looping through elements
const things = document.querySelectorAll(".thing");
things.forEach((thing) => console.log(thing));

//////// manipulation of dom elements using javascript methods.
/// a lot of this is why React was created but is still very important to know! trust me, my struggle bus has been vertical
const ul = document.querySelector(".things");
// ul.remove();
// ul.lastElementChild.remove();
//changes the first li to hello
ul.firstElementChild.textContent = "Hello";
// changes the second li to Sneaky on render
ul.children[1].innerText = "Sneaky";
// changes the last element in the ul list  to an h1 with the text.
ul.lastElementChild.innerHTML = "<h1>Wakiki Sneaky</h1>";
// working with styles
const button = document.querySelector(".button");
button.style.background = "red";

// event listener
// always use addEventListener which takes two things.
/// first is the event, second is going to be the function that you want to run
// when the button is clicked.
// takes an event 'e'.
// button.addEventListener("click", (e) => {
//   //e.preventDefault() prevents from the click to dissapear in the console.
//     e.preventDefault();
//   // console.log(e) shows you the event object
//   // e.target gives you the element. you can also pass
//   // e.target.className and you'll get the classname of the element.
// // you can gather all the different attributes of the event you click.
//     console.log(e.target.className);
// });
button.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#form-ten").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".things").lastElementChild.innerHTML =
    "<h1>Hola</h1>";
});
