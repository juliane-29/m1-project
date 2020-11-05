// js for the faq page
const buttonYes = document.querySelector(".yesButton");
const buttonNo = document.querySelector(".noButton");
const messageContainer = document.querySelector(".messageContainer");
const b4 = document.querySelector(".tdDropInLeft");

const message = document.createElement("h3");

moreInfo = (e) => {
  message.textContent =
    "Yay! Hover on the images to discover some fun facts or some weird movements";
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
