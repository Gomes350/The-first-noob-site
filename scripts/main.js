var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/chybrik.jpg") {
    myImage.setAttribute("src", "images/azoza.png");
  } else {
    myImage.setAttribute("src", "images/chybrik.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Снизу - Азазон, а ты - " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Снизу - Азазон, а ты - " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
