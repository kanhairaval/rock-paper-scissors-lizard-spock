let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let userInput = "";

let btnClick = document.getElementById("strtbtn");

let computerChose = for (let i = 0; i < options.length; i++) {
    computerChose = i.charAt(Math.floor(Math.random() * options.length));
}

btnClick.addEventListener("click", function(){ 
 window.prompt("Please, choose your fighter and type in one of the following inputs rock, paper, scissors, lizard, spock. Choose wisely !!!");
 if (userInput === "ROCK") {
  
 }
})