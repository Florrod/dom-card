import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  this.document.querySelector(".card").classList.add(getRandomSeed());
  this.document.querySelector(".card").innerHTML = getRandomNumber();
};

let getRandomNumber = () => {
  let numbers = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let getRandomSeed = () => {
  let seed = ["diamond", "spade", "club", "heart"];
  let indexSeed = Math.floor(Math.random() * seed.length);
  return seed[indexSeed];
};
