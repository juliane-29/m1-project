"use strict";

class LogIn {
    constructur () {
    // accessing input fields 
    this.firstName = document.querySelector("#fname");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    //accessing button login 
    this.logInButton = document.querySelector("#log-in-button"); 
    // accessing error messages 
    this.errorMessages = document.querySelector(".error-messages")
    }


}
