let compScore = 0;
let userScore = 0;
const compScore_div = document.getElementById("compScoreVal");
const userScore_div = document.getElementById("userScoreVal");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
let userscoreStat = document.getElementById("result-user-stat");
let compscoreStat = document.getElementById("result-comp-stat");
let finalStat = document.getElementById("result-final-stat");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getcompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = choices[Math.floor(Math.random() * 3)];
  return randomNumber;
}
getcompChoice();

function converttoWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissor";
}

function win() {
  userScore++;
  finalStat.innerHTML = "Winner : USER";
  userScore_div.innerHTML = userScore;
  compScore_div.innerHTML = compScore;
  console.log("WON");
  console.log(userScore);
}

function lose() {
  compScore++;
  finalStat.innerHTML = "Winner : COMPUTER";
  userScore_div.innerHTML = userScore;
  compScore_div.innerHTML = compScore;
  console.log("LOST");
}

function draw() {
  finalStat.innerHTML = "Winner : It's Tie";
  userScore_div.innerHTML = userScore;
  compScore_div.innerHTML = compScore;
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getcompChoice();

  userscoreStat.innerHTML = "User : " + converttoWord(userChoice);
  compscoreStat.innerHTML = "Comp : " + converttoWord(computerChoice);

  console.log("User Choice is " + userChoice);
  console.log("Comp Choice is " + computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;

    case "rp":
    case "ps":
    case "sr":
      lose();
      break;

    case "rr":
    case "ss":
    case "pp":
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissor_div.addEventListener("click", function () {
    game("s");
  });
}

main();
