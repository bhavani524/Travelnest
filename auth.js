function signup() {
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  localStorage.setItem(email, password);
  alert("Signup Successful");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (localStorage.getItem(email) === password) {
    alert("Login Successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
}