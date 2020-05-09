/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

/*window.onload = function() {
  var queryPrueba = document.querySelector(".prueba");

  console.log(queryPrueba);
};*/
var numbersList = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var seedList = ["diamonds", "spades", "clubs", "hearts"];

window.onload = () => {
  createCard();
};

function createCard() {
  var number = getRandomNumber();
  console.log(number);
  var seed = getRandomSeed();
  document.querySelectorAll("span")[0].innerHTML = number;

  document.querySelectorAll("p")[0].classList.add(seed);
  console.log(document.querySelectorAll("p")[0].classList);
}

function getRandomNumber() {
  return numbersList[Math.floor(Math.random() * numbersList.length)];
}

function getRandomSeed() {
  return seedList[Math.floor(Math.random() * seedList.length)];
}
