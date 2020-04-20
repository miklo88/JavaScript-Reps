const titleEleven = () => "///////////// THIS IS PAGE ELEVEN /////////////";
console.log(titleEleven());
/// declaring variables of elements that are on the DOM
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
//// adding an addEventListener on the submit button. creating onSubmit as well.
myForm.addEventListener("submit", onSubmit);
/// onSubmit function, passing an event listener into the params
function onSubmit(e) {
  //preventing from out submit to dissapear
  e.preventDefault();
  //getting the nameInput.value
  console.log(nameInput.value);
  // if the name and email don't have strings and error will render.
  if (nameInput.value === "" || emailInput.value === "") {
    // adding error. creating a class
    msg.classList.add("error");
    // error message in html.
    msg.innerHTML = "Please enter all fields";
    // setting timeout of the error message. bc nobody has time for that.
    setTimeout(() => msg.remove(), 3000);
    /// else no error, going to create an li element with the name and email values below the form.
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    // slappin that li on the page when you hit submit.
    userList.appendChild(li);

    // clearing fields and rendering the values that were passed into our form.
    nameInput.value = "";
    emailInput.value = "";
  }
}
// if you want to save the data. go to Lambda and become a fullstack web developer and learn node.
