"use strict";

class Login {
  constructor() {
    // accessing input fields
    // you get the html element, e.g. console.log(document.querySelecor("#fname"))
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    //accessing button login
    this.loginButton = document.querySelector("#log-in-button");
    // accessing messages to show either errors or successful login messages
    this.errorMessages = document.querySelector(".messages");
  }
  // once the user has submitted both email and password
  handleSubmit = (e) => {
  // prevent defaul reloading once clicked
  e.preventDefault(); 
  // get the values from the inputs 
    const email = this.emailInput.value;  
    const password = this.passwordInput.value;

  // get the users from the db, we have to call the function in the db that get all user data 
  // on the instance 
  // variable saving all users, compare email with the db 
  const allUsers = db.getAllUsers();
  allUsers.find(function(userObj){
      if (userObj.email === email && userObj.password === password){
      return true;
      }
  })
  // arr.find() - returns the first element that matches the expression
  // check the pw and email exist in the db 
}
}
// create an instance
const login = new Login();
// it does not show the properties though? typo!! 
// checking properties and methods of the class 

console.log(login);

// only one eventListener as we do not check the input
// the page + ressources must be loaded
window.addEventListener('load', function () {

    login.loginButton.addEventListener('click', login.handleSubmit );
  
  } )
  // handleSubmit function --> first paramenter is the event 