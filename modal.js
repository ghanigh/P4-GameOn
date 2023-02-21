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

// Constantes pour les champs valides ou non
// Ces variables sont des références à des éléments HTML avec des identificateurs correspondants
// Ils sont utilisés pour récupérer les valeurs saisies par l'utilisateur dans des champs de formulaire et pour afficher des messages de validation sur la page Web.
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
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

// Événement pour ouvrir ou fermer le formulaire
// Événement pour ouvrir la fenêtre modale
modalBtn.forEach((btn) => btn.addEventListener("click", openModal));
function openModal() {
  modalbg.style.display = "block";
}

// Événement pour fermer la fenêtre modale
const modalBtnClose = document.querySelector(".close");
modalBtnClose.addEventListener("click", hideModal);
function hideModal() {
  modalbg.style.display = "none";
}

// Création des expressions régulières
const regExTypeText = new RegExp(
  "^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$"
);
const regExTypeEmail = new RegExp(
  "^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$"
);

// Fonction générique pour les champs FirstName + LastName + Email
const firstName = document.querySelector("#first");
firstName.addEventListener("change", function () {
  validateField(
    this,
    regExTypeText,
    "Veuillez rentrer deux caractères minimum",
    firstText
  );
});

const lastName = document.querySelector("#last");
lastName.addEventListener("change", function () {
  validateField(
    this,
    regExTypeText,
    "Veuillez rentrer deux caractères minimum",
    lastText
  );
});

const email = document.querySelector("#email");
email.addEventListener("change", function () {
  validateField(
    this,
    regExTypeEmail,
    "Veuillez rentrer une adresse email valide",
    document.getElementById("emailText")
  );
});

// Fonction pour valider le champ avec une expression régulière et afficher un message en cas d'erreur
function validateField(field, regEx, message, fieldText) {
  if (regEx.test(field.value)) {
    field.classList.remove("error");
    fieldText.innerHTML = "";
    formIsValid = true;
  } else {
    fieldText.setAttribute("data-error","error");
    fieldText.classList.add("error");
    fieldText.innerHTML = message;
    formIsValid = false;
  }
}
