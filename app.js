let userScore = 0;
let machineScore = 0;

let choices = document.querySelectorAll(".choice");
let massage = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let machScorePara = document.querySelector("#machine-score");


let genMechChoice = () => {
    options = ["rock", "paper", "scissors"]
    let ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx]
}

let drawGame = () => {
    massage.innerText = "The game is draw";
    massage.style.backgroundColor = "blue";
}

let showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore++;
        massage.innerText = "You win!";
        massage.style.backgroundColor = "green";
    } else {
        machineScore++;
        machScorePara.innerText = machineScore++;
        massage.innerText = "You lose!";
        massage.style.backgroundColor = "red";
    }
}
let playGame = (userChoice) => {
    const mechChoice = genMechChoice();

    if (userChoice === mechChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper or scissors
            userWin = mechChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //scissors or rock
            userWin = mechChoice === "scissors" ? false : true;
        } else {
            //rock or paper
            userWin = mechChoice === "rock" ? false : true;
        }
        showWinner(userWin);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
