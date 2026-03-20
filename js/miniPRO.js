let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    msg.innerText = "Game was Draw.Play again."
    msg.style.backgroundColor = "hwb(212 5% 75%)";
}

const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red"

    }
}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    //genrate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice=", CompChoice);

    if (userChoice === CompChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            CompChoice === "scissors" ? false : true;
        } else {
            userWin = CompChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, CompChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});