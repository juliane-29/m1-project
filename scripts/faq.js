const buttonYes = document.querySelector(".yesButton");
const buttonNo = document.querySelector(".noButton");

const anotherMessage = document.querySelector(".tdDropInLeft");
const b4 = document.querySelector(".tdDropInLeft");

moreInfo = (e) => {
  const message = document.createElement("p");
  message.innerHTML = "<p>Let's start with the first question</p>";
  anotherMessage.appendChild(message);
};

noInfo = (e) => {
  const message = document.createElement("p");
  message.innerHTML = "<h2>Ok, fine</h2>";
  anotherMessage.appendChild(message);
};

buttonYes.addEventListener("click", moreInfo);
buttonNo.addEventListener("click", noInfo);

const question1 = document.querySelector("#question1");
question1.addEventListener("mouseover", displayAnswer);

displayAnswer = (e) => {
  console.log("HI");
};
