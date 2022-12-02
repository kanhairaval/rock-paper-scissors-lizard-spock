let options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

let btnClick = document.getElementById("strtbtn");

btnClick.addEventListener("click", function(){ 
let userInput = window.prompt("Please, choose your fighter and type in one of the following inputs rock, paper, scissors, lizard, spock. Choose wisely !!!");
 if (!userInput === options) {
    window.alert("You have chosen a invalid option, stupid.")
 }

 userInput = userInput.toUpperCase();

 let computerChoice = options[Math.floor(Math.random() * options.length)];

 window.alert(`The computer chose ${computerChoice}.`);
})