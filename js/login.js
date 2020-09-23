document.querySelector("#loginForm").addEventListener("submit", login);

function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pwd = document.getElementById("password").value;

  if (email == Users("email") && pwd == Usets("pwd")) {
    window.location.replace("theBlog.html");
  } else {
    alert("Please register so that you can log in");
  }
}
