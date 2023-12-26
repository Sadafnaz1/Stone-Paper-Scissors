let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
     msg.innerText = "Game Draw!"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin ){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundcolor = "green";
    }else{
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundcolor = "red";
    }

};

const playGame = (userChoice) => {
    //Generate Computer choice
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "Rock"){
            //paper, Scissors
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //rock,  Scissors
            userWin = compChoice === "Scissors" ? false : true;
            //rock, paper
        }else userWin = compChoice === "Rock" ? false : true;
         showWinner(userWin, userChoice, compChoice);

    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
     const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});