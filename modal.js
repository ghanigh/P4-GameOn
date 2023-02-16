// Menu burger
const iconMenu = document.querySelector(".icon");
iconMenu.addEventListener("click", editNav);
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
const modalClose = document.querySelector(".close");
modalClose.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}






// La constante "validForm" sélectionne l'élément HTML avec la classe "validationForm
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const validForm = document.querySelector(".validationForm");