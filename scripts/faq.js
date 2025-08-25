let acord = document.getElementsByClassName("acordion")[0];

acord.addEventListener("click",onClick);

function onClick(event){
    event.target.nextElementSibling.classList.toggle("active");
}