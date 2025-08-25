let acord = document.getElementsByClassName("acordion")[0];

acord.addEventListener("click",onClick);


function onClick(event){
    let acordionParagraph = event.target.nextElementSibling;
    if(acordionParagraph) acordionParagraph.classList.toggle("active");
}