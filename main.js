import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";
import "./homework-12.js";

const productCards = document.querySelectorAll(".product-card");
const changeColorAllCardButton = document.querySelector("#change-color-all-card",);
const pinkColorHash = "#FFC0CB";
const blueColorHash = "#0000FF";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = pinkColorHash));
});

const firstProductCard = document.querySelector(".product-card");
const changeColorFirstCardButton = document.querySelector("#change-color-first-card",);

changeColorFirstCardButton.addEventListener("click", () => {
  const randomColorHash =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  firstProductCard.style.backgroundColor = randomColorHash;
});

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  }
}

const outputConsoleLogButton = document.querySelector("#output-console-log");

outputConsoleLogButton.addEventListener("click", () =>
  outputConsoleLog("Дз №4"),
);

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

const title = document.querySelector(".cards-catalog__title");

title.addEventListener("mouseenter", function () {
  console.log(title.textContent);
});

const changeColorButton = document.querySelector(".change-color-button");

changeColorButton.addEventListener("click", () => {
  changeColorButton.classList.toggle("change-color-button--green");
  if (changeColorButton.classList.contains("change-color-button--green")) {
    changeColorButton.classList.toggle("change-color-button--red");
  }
});
