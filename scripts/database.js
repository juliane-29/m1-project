"use strict"

class Database {
   // no constructor as only methods
  // a method to get users *array* from the localStorage 
  getAllUsers =() => {
    //key to look for in local storage - it's a string 
      const usersStr = localStorage.getItem("users");
    // convert the string to an array 
      const usersArray = JSON.parse(usersStr); 
    if (usersStr === null){
    // if no users has yet signed up, the string would be empty (ls empty)
        return [];
    }
    else {
      return usersArray;
    }
  }
    // a method to save a user into the localStorage users array
    // careful user data comes from the data entered on the form - class User, instance new User (object)
    saveNewUser = (newUser) => {
    // get the array of users saved in the localStorage 
    const usersArray = this.getAllUsers(); 

    //update the users array and add the new user to it
    const updatedUsersArr = [...usersArray, newUser]

    // save back the updated users array to local storage
    const updatedUsersStr = JSON.stringify(updatedUsersArr); 
    localStorage.setItem("users", updatedUsersStr); 
}
}
// create an instance for the db
const db = new Database(); 

console.log("db", db);

//QUESION - why arrow functions 