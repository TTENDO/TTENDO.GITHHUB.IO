//variables
const myStorage = window.localStorage;
const registerbtn = document.querySelector(".registerbtn");
//! creating a registration store
function createRegistrationStore() {
  let regstore = JSON.parse(localStorage.getItem("formData"));
  if (regstore === null) {
    localStorage.setItem("formData", JSON.stringify([]));
    return regstore;
  } else {
    return regstore;
  }
}
createRegistrationStore();

function register(e) {
  let regstore = createRegistrationStore();
  const reginputValue = document.getElementsByTagName("input").values;

  regstore.push(reginputValue);

  let formData = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    pwd: document.getElementById("pwd").value,
    pwd1: document.getElementById("pwd1").value,
  };
  // checking if passwords match
  if (pwd.value != pwd1.value) {
    alert("Passwords don't match");
  } else {
    localStorage.setItem("formData".JSON.stringify(formData));
  }

  //prevent browser from submitting the form

  e.preventDefault();
}

registerbtn.onclick = register;

//! create Blog
// function createBlog() {
//   let blogstore = createBlogStore();
//   const bloginputValue = inputBlog.value;

//   if (bloginputValue.trim().length !== 0) {
//     blogstore.push(bloginputValue);
//     localStorage.setItem("myBlog", JSON.stringify(blogstore));

//     displayBlog();
//     deleteBlog();
//     updateBlog();
//   } else {
//     //     alert("Please enter something in your blog");
//     const errorMessage = document.getElementById("errorMessage");
//     errorMessage.innerHTML = "Please enter something in your blog";

//     return;
//   }
// }
