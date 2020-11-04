/*class NewsletterSignup {
    constructor(){
        // store input input 
        this.firstNameInput = document.querySelector("#fname");
        this.emailInput = document.querySelector("#email");
        // button on newsletter form
        this.buttonInput = document.querySelector("#sign-up-button")
        this.errorMessages = document.querySelector("#error-messages")
    }
    handleEmailInput = (e) => {
        // important - event object is the first parameter coming from the addeventlistener provided by the browser, it has information about the event
        //console.log(e);
        // e.target!! gets the element <input ...>, value is inside of it
        const email = e.target.value;
        //console.log(email);
        // take the methods from the validator to evaluate the input from the user
        validator.validateEmail(email);
        this.setErrorMessages();
    };

    setErrorMessages = () => {
        // clear messages so they don't build up
        this.errorMessages.innerHTML = "";
        const errorsObj = validator.showErrorMessages();
        console.log("errorsObj", errorsObj);
        // returning an array with only the values; a special object in JS
        const errorStringsArr = Object.values(errorsObj);
        errorStringsArr.forEach((str) => {
          const p = document.createElement("p");
          p.textContent = str;
          this.errorMessages.appendChild(p);
        });
      };
    

    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
    }

}

const newsletterSignup = new NewsletterSignup(); 

console.log(newsletterSignup);*/

