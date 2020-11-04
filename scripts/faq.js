
// js for the faq page
const buttonYes = document.querySelector(".yesButton");
const buttonNo = document.querySelector(".noButton");
const anotherMessage = document.querySelector(".tdDropInLeft");
const b4 = document.querySelector(".tdDropInLeft");

const message = document.createElement("p");

moreInfo = (e) => {
  message.innerHTML = "<h3>Let's start with the first question</h3>";
  anotherMessage.appendChild(message);
};

message.innerHTML = "";

noInfo = (e) => {
e.preventDefault();
  //const message = document.createElement("p");
  message.innerHTML = "<h3>Ok, fine, not everyone is a plant person</h3>";
  anotherMessage.appendChild(message);

};

message.innerHTML = "";


buttonYes.addEventListener("click", moreInfo);
buttonNo.addEventListener("click", noInfo);

const question1 = document.querySelector("#question1");

displayAnswer = (e) => {

    console.log("hi");
  };
  

question1.addEventListener("mouseover", displayAnswer);

