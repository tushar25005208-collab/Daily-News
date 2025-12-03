function subscribe() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");
  if(email && email.includes("@")) {
    message.textContent = "Thank you for subscribing, " + email + "!";
    message.style.color = "green";
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  }
}