const toggleBtn = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", function () {
  if (messageField.style.display === "none") {
    // ako je skrivena, pokaži
    messageField.style.display = "block";
    toggleBtn.textContent = "Sakrij poruku";
  } else {
    // ako je prikazana, sakrij
    messageField.style.display = "none";
    toggleBtn.textContent = "Prikaži poruku";
  }
});
