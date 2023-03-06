// Menu burger
const iconMenu = document.querySelector(".icon");
iconMenu.addEventListener("click", editNav);
// Affichage du menu
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

// ----- ANNIVERSAIRE-----
const birthdate = document.querySelector("#birthdate");
birthdate.addEventListener("change", function () {
  validateField(
    this,
    isValidDate,
    "Veuillez entrer une date de naissance valide",
    document.getElementById("birthdateText")
  );
});

const quantity = document.querySelector("#quantity");
quantity.addEventListener("change", function () {
  validateField(
    this,
    isValidQuantity,
    "Veuillez indiquer un nombre de tournois valide",
    document.getElementById("quantityText")
  );
});

function validateField(input, validateFn, errorMessage, messageElement) {
  const validClass = "border-success";
  const invalidClass = "border-danger";
  const successMessage = "Champ valide";
  const successClass = "text-success";
  const failureClass = "text-danger";

  if (!input.value) {
    setMessage(input, messageElement, "Veuillez remplir ce champ", failureClass, invalidClass);
    return false;
  } else if (!validateFn(input.value)) {
    setMessage(input, messageElement, errorMessage, failureClass, invalidClass);
    return false;
  } else {
    setMessage(input, messageElement, successMessage, successClass, validClass);
    return true;
  }
}


function isValidQuantity(value) {
  const parsedValue = parseInt(value);
  return !isNaN(parsedValue) && parsedValue > 0 && parsedValue <= 50;
}

function isValidDate(value) {
  return !isNaN(Date.parse(value));
}

function setMessage(input, messageElement, message, messageClass, inputClass, validClass, invalidClass) {
  if (!input || !messageElement || !message || !messageClass || !inputClass) {
    throw new Error("Les arguments input, messageElement, message, messageClass et inputClass sont obligatoires.");
  }

  messageElement.innerHTML = message;
  messageElement.classList.remove(inputClass + "-success", inputClass + "-failure");
  messageElement.classList.add(messageClass);

  if (validClass && invalidClass) {
    input.classList.remove(validClass, invalidClass);
  }
  input.classList.add(inputClass);
}


// ----- NOMBRE DE TOURNOIS -----
quantity.addEventListener('change', function() {
  validateQuantity(this);
  });
  
  function validateQuantity(input) {
  const errorMessage = "Merci d'indiquer le nombre de tournois";
  const validClass = "border-success";
  const invalidClass = "border-danger";
  const successMessage = "Champs valide";
  const successClass = "text-success";
  const failureClass = "text-danger";
  
  const isValid = isValidQuantity(input.value);
  
  if (!isValid) {
  setMessage(input, quantityText, errorMessage, failureClass, invalidClass);
  return false;
  } else if (input.value > 50) {
  setMessage(input, quantityText, "Nous n'avons pas organisé autant de tournois !", failureClass, invalidClass);
  return false;
  } else {
  setMessage(input, quantityText, successMessage, successClass, validClass);
  return true;
  }
  }
  
  function isValidQuantity(value) {
  const parsedValue = parseInt(value);
  return !isNaN(parsedValue) && parsedValue > 0 && parsedValue <= 50;
  }
  
  // ----- VILLES -----
  const locationTournament = document.querySelectorAll('input[type="radio"]');
  locationTournament.forEach((checkedBoxInput) => checkedBoxInput.addEventListener('change', function() {
  validateLocationTournament();
  }));
  
  function validateLocationTournament() {
  const errorMessage = "Merci de cocher une ville";
  const successMessage = "Champs valide";
  const successClass = "text-success";
  const failureClass = "text-danger";
  const isChecked = verifLocationTournament();
  
  if (!isChecked) {
  setMessage(locationTournament[0], locationText, errorMessage, failureClass);
  return false;
  } else {
  setMessage(locationTournament[0], locationText, successMessage, successClass);
  return true;
  }
  }
  
  function verifLocationTournament() {
  for (let i = 0; i < locationTournament.length; i++) {
  if (locationTournament[i].checked) {
  return true;
  }
  }
  return false;
  }
  
  // ----- CONDITIONS -----
  const condition = document.querySelector("#checkbox1");
  condition.addEventListener('change', function() {
  validateCondition();
  });
  
  function validateCondition() {
  const errorMessage = "Merci d'accepter les conditions d'utilisations";
  const successMessage = "Champs valide";
  const successClass = "text-success";
  const failureClass = "text-danger";
  
  if (!condition.checked) {
  setMessage(condition, conditionText, errorMessage, failureClass);
  return false;
  } else {
  setMessage(condition, conditionText, successMessage, successClass);
  return true;
  }
  }
  
  //----- BTN VALIDATION -----
  function openRemerciments() {
  form.style.display = "none";
  validForm.style.display = "flex";
  validMessage.innerHTML = "Merci pour votre inscription";
  }
  
  function validate(event) {
    event.preventDefault();
  
    const regExTypeText = /[\w'-]+/;
    const regExTypeEmail = /\S+@\S+\.\S+/;
  
    const firstName = document.querySelector('#firstname');
    const lastName = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const birthdate = document.querySelector('#birthdate');
    const quantity = document.querySelector('#quantity');
  
    const firstText = document.querySelector('.firstname.error');
    const lastText = document.querySelector('.lastname.error');
    const emailText = document.querySelector('.email.error');
  
    if (
      validateField(firstName, regExTypeText, firstText) &&
      validateField(lastName, regExTypeText, lastText) &&
      validateField(email, regExTypeEmail, emailText) &&
      validateBirthdate(birthdate) &&
      validateQuantity(quantity) &&
      validateLocationTournament() &&
      validateCondition()
    ) {
      openRemerciments();
    } else {
      alert("Merci de remplir correctement votre inscription");
    }
  }
  
  
  // Validation du formulaire
  const btnSubmit = document.getElementById("btnSubmit");

  form.addEventListener("submit", validate);
  
  btnSubmit.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche l'envoi par défaut du formulaire
  if (form.checkValidity()) {
    form.submit(); // Envoyer le formulaire si tout est valide
  } else {
    // Afficher un message d'erreur ou une indication pour l'utilisateur
    // sur les champs de saisie qui ont besoin d'être corrigés
  }
});

