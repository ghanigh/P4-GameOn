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



// Constant pour les champs valide ou non
// Ces variables sont des références à des éléments HTML avec des identificateurs correspondants
// Ils sont utilisés pour récupérer les valeurs saisies par l'utilisateur dans des champs de formulaire et pour afficher des messages de validation sur la page Web.
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const emailText = document.getElementById("emailText");
const birthdateText = document.getElementById("birthdateText");
const quantityText = document.getElementById("quantityText");
const locationText = document.getElementById("locationText");
const conditionText = document.getElementById("conditionText");


// Fonction pour afficher les messages de validation sur la page Web
function showMessage(message) {
  const div = document.createElement("div");
  div.classList.add("alert");
  div.classList.add("alert-danger");
  div.innerHTML = message;
  document.querySelector(".validationForm").appendChild(div);
}


// ----- Evènement ouvrir ou fermer le Formulaire -----

// Open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));

// Open modal form
// Ajout a modalbg un display : block; au css css pour le faire apparaitre
function openModal() {
  modalbg.style.display = "block";                           
};
function hideModal() {
  modalbg.style.display = "none";                            
};

// Close modal form 
modalBtnClose.addEventListener("click", function() {          // Évènement au click
  modalbg.style.display = "none";                             // Pour fermer la modal avec le bouton close
});


