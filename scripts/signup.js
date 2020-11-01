"use strict"; //good practice 
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
    this.buttonInput = document.querySelector("#button-signup");
    // to display *error messages* we have to access the div element
    this.errorMessages = document.querySelector(".error-messages"); 
    }

    // all functions interacting with the sign up form are put into the constructor 
    // handle the input of the email: read the input and evaluate it 

    handleEmailInput = (e) => {
        console.log(e.target); // 
        const emailInput = e.target; 
        const email = emailInput.value; 
    }
    // hanlde the input of the password 
    handlePasswordInput = () => {

    }

    // handle the repeat password 
    handleRepeatPasswordInput = () => {

    }

    // save the data once submitted (button clicked)
    saveData = () => {

    }

    // add Event Listeners 
    // input event fires when the value of an <input>, <select> or <textarea> has been changed
    addListeners = () => {
        this.emailInput.addEventListeners("input", this.handleEmailInput);
        // user enters something, handle EmailInput is called 
        // Important --> the first parameter for the function is the event object, type depends on the specified event, click belongs to the MouseEvent object 
        this.passwordInput.addEventListeners("input", this.handlePasswordInput);
        this.passwordRepeatInput.addEventListeners("input", this.handleRepeatPasswordInput); 
        // once clicked as submitted, save data is called
        this.buttonInput.addEventListeners("click", this.saveData); 
    }

}

// creating *one* instance - class is just to organize the code, singletone pattern
// object is created
// have the properties defined in the class plus methods 
const signup = new Signup();
console.log(Signup); // class 
console.log(signup); // output the object with properties and methods, e.g. email Input: input#email

// add eventlisteners when everything (files, resources) are loaded 
// important as we need other files to be loaded, e.g. validator.js
window.addEventListener("load", signup.addListeners);










