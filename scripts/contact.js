// Validacija forme
const form = document.getElementById("contactForm");
const messageField = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // spriječi reload stranice

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = messageField.value;

  if (name === "" || email === "" || message === "") {
    alert("Sva polja moraju biti popunjena.");
    return;
  }

  if (email.indexOf("@") === -1) {
    alert("Email mora sadržavati @.");
    return;
  }

  alert("Poruka je poslana.");
  form.reset();
});
