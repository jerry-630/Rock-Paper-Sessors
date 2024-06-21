let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const mgs = document.querySelector("#mgs");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "sessiors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  // rock ,paer ,sessior
};
const drawGame = () => {
  //   console.log("game was draw");
  mgs.innerText = "Game was Draw. Play Again!";
  mgs.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win!");
    mgs.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    mgs.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you loss!");
    mgs.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    mgs.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("user Choice = ", userChoice);
  // Generate Computer Choice
  const compChoice = genCompChoice();
  //   console.log("comp Choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // sessiors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, sessiors
      userWin = compChoice === "sessiors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
