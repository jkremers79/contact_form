let email = "";
let firstName = "";
let lastName = "";
let queryType = "";
let message = "";
let consent = false;

const checkEmailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function validateForm(event) {
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
        }, "4000"
        )
    }
}

function validateFirstName() {
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

function validateLastName() {
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

function validateEmail() {

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

function validateQuery() {
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

function setSelectedQuery(value, index) {
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

function validateMessage() {
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

function validateConsent() {

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


const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const firstNameInput = document.querySelector(".fname");
firstNameInput.addEventListener("input", (e) => firstName = e.target.value);

const lastNameInput = document.querySelector(".lname");
lastNameInput.addEventListener("input", (e) => lastName = e.target.value);

const emailInput = document.querySelector(".email");
emailInput.addEventListener("input", (e) => email = e.target.value);

const queryInputs = document.querySelectorAll(".query_type");
queryInputs.forEach((query, index) => {
    query.addEventListener("click", (e) => setSelectedQuery(e.target.value, index));
})

const messageInput = document.querySelector(".message");
messageInput.addEventListener("input", (e) => message = e.target.value);

const consentCheck = document.querySelector(".consent");
consentCheck.addEventListener("click", () => consent = !consent);