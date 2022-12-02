let options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

let btnClick = document.getElementById("strtbtn");

btnClick.addEventListener("click", function(){ 
let userInput = window.prompt("Please, choose your fighter and type in one of the following inputs rock, paper, scissors, lizard, spock. Choose wisely !!!");
 if (!userInput) {
    return;
 }

 userInput = userInput.toUpperCase();

 let computerChoice = options.charAt(Math.floor(Math.random() * options.length));

 console.log(computerChoice);

 window.alert(`The computer chose ${computerChoice}.`);
})