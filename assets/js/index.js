let options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];

let btnClick = document.getElementById("strtbtn");

btnClick.addEventListener("click", function(){ 
let userInput = window.prompt("Please, choose your fighter and type in one of the following inputs rock, paper, scissors, lizard, spock. Choose wisely !!!");

userInput = userInput.toUpperCase();

if (
    userInput != "ROCK" &&
    userInput != "PAPER" &&
    userInput != "SCISSORS" &&
    userInput != "LIZARD" &&
    userInput != "SPOCK"
  ) {
    window.alert("Are you stupid? I just said choose from one of the following options.");
  } else {
    window.alert("Good luck with your choice, hope you chose wisely !!!")
  }

  let computerChoice = options[Math.floor(Math.random() * options.length)];

  window.alert(`The computer chose ${computerChoice}.`);
  
  if (userInput === computerChoice) {
    window.alert("It's a tie !!!")
 } else if (
 (userInput === "ROCK" && computerChoice === "SCISSORS") ||
 (userInput === "PAPER" && computerChoice === "ROCK") ||
 (userInput === "SCISSORS" && computerChoice === "PAPER") ||
 (userInput === "ROCK" && computerChoice === "LIZARD") ||
 (userInput === "LIZARD" && computerChoice === "SPOCK") ||
 (userInput === "SPOCK" && computerChoice === "SCISSORS ") ||
 (userInput === "SCISSORS" && computerChoice === "LIZARD") ||
 (userInput === "LIZARD" && computerChoice === "PAPER") ||
 (userInput === "PAPER" && computerChoice === "SPOCK") ||
 (userInput === "SPOCK" && computerChoice === "ROCK")
 ) {
    window.alert("Damn ! You're good at this, You win !!!")
 } else {
    window.alert("Wan Wan, You Lose !!!")
 }
})

//If user input is invalid, stop executing the next line of code javascript?
