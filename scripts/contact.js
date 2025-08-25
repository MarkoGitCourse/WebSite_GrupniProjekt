// Validacija forme
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = messageField.value;

  if (name === "" || email === "" || message === "") {
    result.textContent = "Sva polja moraju biti popunjena.";
    result.style.color = "red";
    return;
  }

  if (email.indexOf("@") === -1) {
    result.textContent = "Email mora sadržavati @.";
    result.style.color = "red";
    return;
  }

  result.textContent = "Poruka je poslana.";
  result.style.color = "green";
  form.reset();
});
