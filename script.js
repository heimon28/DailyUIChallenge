function togglePasswordVisibility() {
    var passwordInput = document.getElementById("myPassword");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }