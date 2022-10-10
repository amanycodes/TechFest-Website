function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message")
    messageElement.textContent = message
    messageElement.classList.remove("form__message--success", "form__message--error")
    messageElement.classList.add("form__message--${type}")
    
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e=>{
        e.preventDefault
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        // let heading = document.querySelector('.title')
        // heading.textContent = 'create account'
    })

    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        // let heading = document.querySelector('.title')
        // heading.textContent = 'login'
    })

    loginForm.addEventListener("submit", e=> {
        e.preventDefault();
    })

    function setInputError(inputElement, message) {
        inputElement.classList.add("input--error")
        inputElement.parentElement.querySelector(".input-error-message").textContent = 'no' 
    }

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length");
    //         }
    //     })
    // })    
})