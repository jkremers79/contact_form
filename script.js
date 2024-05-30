// variables for storing user input and query selectors

let email = "";
let firstName = "";
let lastName = "";
let queryType = "";
let message = "";
let consent = false;

const form = document.querySelector("form");
const firstNameInput = document.querySelector(".fname");
const lastNameInput = document.querySelector(".lname");
const emailInput = document.querySelector(".email");
const queryInputs = document.querySelectorAll(".query_type");
const messageInput = document.querySelector(".message");
const consentCheck = document.querySelector(".consent");


// Functions 

const checkEmailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateFirstName = function () {
    const element = document.querySelector(".fname").classList;

    if (firstName == "") {
        element.add("error");
        return false;
    }
    else {
        element.remove("error");
        return true;
    }
}

const validateLastName = function () {
    const element = document.querySelector(".lname").classList;

    if (lastName == "") {
        element.add("error");
        return false;
    }
    else {
        element.remove("error");
        return true;
    }
}

const validateEmail = function () {

    const container = document.querySelector(".email").classList;
    const textField = document.querySelector(".error_msg_email");
    const isEmailValid = checkEmailIsValid(email)

    if (email == "") {
        textField.textContent = "This field is required"
        container.add("error")
        return false;
    }
    else if (!isEmailValid) {
        textField.textContent = "Please enter a valid email address"
        container.add("error")
        return false;
    }
    else {
        textField.textContent = ""
        container.remove("error")
        return true;
    }
}

const validateQuery = function () {
    const element = document.querySelector("fieldset").classList;

    if (queryType == "") {
        element.add("error");
        return false;
    }
    else {
        element.remove("error");
        return true;
    }
}

const setSelectedQuery = function (value, index) {
    queryType = value;

    const queryInputs = document.querySelectorAll(".query_container");

    if (index === 0) {
        queryInputs[0].classList.add("active");
        queryInputs[1].classList.remove("active");
    }
    else {
        queryInputs[0].classList.remove("active");
        queryInputs[1].classList.add("active");
    }
}

const validateMessage = function () {
    const element = document.querySelector(".message").classList;

    if (message == "") {
        element.add("error");
        return false;
    }
    else {
        element.remove("error");
        return true;
    }
}

const validateConsent = function () {

    const element = document.querySelector(".consent_check").classList;

    if (consent === false) {
        element.add("error");
        return false;
    }
    else {
        element.remove("error");
        return true;
    }
}

const validateForm = function (event) {
    event.preventDefault();

    const toast = document.querySelector(".succes_toast").classList;

    const emailIsValid = validateEmail();
    const firstNameIsValid = validateFirstName();
    const lastNameIsValid = validateLastName();
    const messageIsValid = validateMessage();
    const queryIsSelected = validateQuery();
    const consentIsGiven = validateConsent();

    if (emailIsValid && firstNameIsValid && lastNameIsValid && messageIsValid && queryIsSelected && consentIsGiven) {
        toast.add("show");

        setTimeout(() => {
            toast.remove("show")
        }, "6000"
        );
    }
}

// Event listeners

form.addEventListener("submit", validateForm);
firstNameInput.addEventListener("input", (e) => firstName = e.target.value);
lastNameInput.addEventListener("input", (e) => lastName = e.target.value);
emailInput.addEventListener("input", (e) => email = e.target.value);

queryInputs.forEach((query, index) => {
    query.addEventListener("click", (e) => setSelectedQuery(e.target.value, index));
});

messageInput.addEventListener("input", (e) => message = e.target.value);
consentCheck.addEventListener("click", () => consent = !consent);