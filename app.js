const emailInput = document.querySelector("#email_input");
const submitButton = document.querySelector("#submit_form");
const emailErrorLabel = document.querySelector("#email_error_text");
const signupForm = document.querySelector("#signupForm");
const successMessage = document.querySelector("#successMessage");
const dismissButton = document.querySelector("#dismissButton");
const signupImage = document.querySelector("#signupImage");



submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const text = emailInput.value;

    console.log(text);
    if(text.includes("@") && text.includes(".")) {
        successMessage.classList.toggle("success-container--active");
        signupForm.classList.toggle("form--disable");
        emailInput.value = "";
    } else {
        emailInput.classList.add("form__input-container__input--error");
        emailErrorLabel.classList.add("form__input__error--active");
    }
});


dismissButton.addEventListener("click", () => {
    successMessage.classList.toggle("success-container--active")
    signupForm.classList.toggle("form--disable")
})

window.addEventListener("resize", () => {
    if(window.innerWidth < 450) {
        signupImage.src = "./assets/images/illustration-sign-up-mobile.svg"
    } else {
        signupImage.src = "./assets/images/illustration-sign-up-desktop.svg"
    }
});