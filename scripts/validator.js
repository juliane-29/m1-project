"use strict";

// Validation

// manage errors

// email: syntax + is email available (METHOD)

// password: length of the password + if the password + repeat password match (METHOD)

class Validator {
  constructor() {
    // predetermined error messages
    this.invalidEmailError = "Enter a valid email address.";
    this.emailExistsError = "Entered Email Address is already taken.";
    this.passwordError = "Password must be at least 6 characters long.";
    this.passwordNotMatching = "Password must be matching.";

    // object with all the current errors that are shown to the user
    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      passwordNotMatching: this.passwordNotMatching,
    };
  }

  validateEmail = (email) => {
    // if true - no error message
    if (this.emailSyntaxIsValid(email)) {
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };
  // *helper* function for validating
  emailSyntaxIsValid = (email) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // RegEx is a special object
    // emailRegEx.test is used to check if the string fulfills the rules
    // set in email to check - return boolean
    const emailIsValid = emailRegEx.test(email);
    return emailIsValid;
  };

  validateUniqueEmail = (email) => {
    // array of all users
    const users = db.getAllUsers(); // [{bob@mail.com}, {sarah@gmail.com}, {magali@gmx.de}]
    let emailUnique = true; // check if it is still true by iterating through the array
    users.forEach((userObj) => {
      if (userObj.email === email) {
        emailUnique = false;
      }
    });
    if (emailUnique) {
      delete this.errors.emailExistsError;
    } else {
      this.errors.emailExistsError = this.emailExistsError;
    }
  };

  validatePassword = (password) => {
    if (password.length >= 6) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
  };

  validateRepeatPassword = (password, repeatPassword) => {
    if (password === repeatPassword) {
      delete this.errors.passwordNotMatching;
    } else {
      this.errors.passwordNotMatching = this.passwordNotMatching;
    }
  };
  // get the errors to show them to the user on the signup page
  // not necessary but cleaner 
  showErrorMessages = () => {
    return this.errors; 
  };
}

// going to use the instance for the sign up page to check the inputs and show error
// messages if necessary
const validator = new Validator();
//console.log("validator",validator);
