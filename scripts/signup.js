"use strict";
//good practice
//Sign up class will be interacting with the input fields
// Get all the elements that are typed into the input boxes
// only handles sign up functionality --> sepearation of concerns

class Signup {
  constructor() {
    // store all *input* elements
    this.fnameInput = document.querySelector("#fname");
    this.lnameInput = document.querySelector("#lname");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#pword");
    this.passwordRepeatInput = document.querySelector("#repeat-pword");
    // access *button*
    this.buttonInput = document.querySelector("#sign-up-button");
    // to display *error messages* we have to access the div element
    this.errorMessages = document.querySelector(".error-messages");
  }

  // all functions interacting with the sign up form are put into the constructor
  // handle the input of the email: read the input and evaluate it

  handleEmailInput = (e) => {
    // important - event object is the first parameter coming from the addeventlistener provided by the browser, it has information about the event
    //console.log(e);
    // e.target!! gets the element <input ...>, value is inside of it
    const email = e.target.value;
    //console.log(email);
    // take the methods from the validator to evaluate the input from the user
    validateInput.validateEmail(email);
    validateInput.validateUniqueEmail(email);
  };
  // handle the input of the password
  handlePasswordInput = (e) => {
    const password = e.target.value;
    //console.log(password);
    validateInput.validatePassword(password);
  };
  // handle the repeat password
  handleRepeatPasswordInput = (e) => {
    const repeatPassword = e.target.value;
    //console.log(repeatPassword);
    validateInput.passwordNotMatching(password,repeatPassword)
  };
  // save the data once submitted (button clicked)
  saveData = (e) => {
    // prevent the default behavior of the submit button
    // calling prevent default on the event object
    e.preventDefault();
    // get the value of the inputs; this fnameInput is the element and value the "input"
    const fName = this.fnameInput.value;
    const lName = this.lnameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    // create new user as an object literal
    /*const newUser = {
            firstName: fName, 
            lastName: lName,
            email: email,
            password: password,
        }
    */
    const newUser = new User(fName, lName, email, password);
    console.log(newUser);
    // save the user in the database
    db.saveNewUser(newUser);
    // empty the form
    this.fnameInput.value = "";
    this.lnameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.passwordRepeatInput.value = "";
  };
  // add Event Listeners
  // input event fires when the value of an <input>, <select> or <textarea> has been changed
  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    // whenever user enters/inputs (even just one key) something, handle EmailInput is called. When it is run the browser provides the event object!!
    // Important --> the first parameter for the function is the event object, type depends on the specified event, click belongs to the MouseEvent object
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.passwordRepeatInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );
    // once clicked as submitted, save data is called, runs once and creates user from that
    this.buttonInput.addEventListener("click", this.saveData);
  };
}

// creating *one* instance - class is just to organize the code, singletone pattern
// object is created
// have the properties defined in the class plus methods
const signup = new Signup();
console.log(Signup); // class
console.log(signup); // output the object with properties and methods, e.g. email Input: input#email

// add eventlisteners when everything (files, resources) are loaded
// important as we need other files to be loaded, e.g. validator.js, meaning the
//input is handled by the class sign up, validated
// by validator.js class
window.addEventListener("load", signup.addListeners);
