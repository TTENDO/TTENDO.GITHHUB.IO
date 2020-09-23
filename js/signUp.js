// // variable declaration
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const pwd = document.getElementById("pwd");
// const pwd1 = document.getElementById("pwd1");

// function createRegStore() {
//   // checking if passwords match
//   if (pwd.value != pwd1.value) {
//     alert("Passwords don't match");
//   } else {
//     localStorage.setItem("Firstname", fname.value);
//     localStorage.setItem("Lastname", lname.value);
//     localStorage.setItem("Email", email.value);
//     localStorage.setItem("Password", pwd.value);
//   }
// }

document.querySelector("#registerForm").addEventListener("submit", register);
function register(e) {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("pwd").value;
  const pwd1 = document.getElementById("pwd1").value;

  let formData = {
    FirstName: fname,
    LastName: lname,
    Email: email,
    Password: pwd,
    Password1: pwd1,
    posts: [],
  };

  localStorage.setItem("Users", JSON.stringify(formData));
  window.location.replace("login.html");
}
