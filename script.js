let email = "";
let firstName = "";
let lastName = "";
let message = "";


const checkEmailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


function validateForm(event) {
    event.preventDefault();

    const emailIsValid = validateEmail();
    const firstNameIsValid = validateFirstName();
    const lastNameIsValid = validateLastName();
    const messageIsValid = validateMessage();

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


const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const firstNameInput = document.querySelector(".fname");
firstNameInput.addEventListener("input", (e) => firstName = e.target.value);

const lastNameInput = document.querySelector(".lname");
lastNameInput.addEventListener("input", (e) => lastName = e.target.value);

const emailInput = document.querySelector(".email");
emailInput.addEventListener("input", (e) => email = e.target.value);

const messageInput = document.querySelector(".message");
messageInput.addEventListener("input", (e) => message = e.target.value);
