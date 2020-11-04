
// js for the faq page
const buttonYes = document.querySelector(".yesButton");
const buttonNo = document.querySelector(".noButton");
const messageContainer = document.querySelector(".messageContainer");
const b4 = document.querySelector(".tdDropInLeft");

const message = document.createElement("h3");

moreInfo = (e) => {
  message.textContent = "Let's start with the first question.";
  messageContainer.appendChild(message);
  
};

message.innerHTML = "";

noInfo = (e) => {
e.preventDefault();
  //const message = document.createElement("p");
  message.textContent = "Ok, fine, not everyone is a plant person.";
  messageContainer.appendChild(message);

};

message.innerHTML = "";


buttonYes.addEventListener("click", moreInfo);
buttonNo.addEventListener("click", noInfo);


const answer11 = document.querySelector("#answer-1-1")
const answer12 = document.querySelector("#answer-1-2")
const answer13 = document.querySelector("#answer-1-3")

// when clicked on wrong answer 
answer11.addEventListener("click", displayWrongAnswer); 

const answer = document.createElement("p");
const answer1 = document.querySelector("#answer1"); 

displayWrongAnswer = (e) => {
    answer.textContent = "Nope, you are wrong. Try another one";
    answer1.appendChild(answer);   
}