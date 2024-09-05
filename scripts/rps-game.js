//@ts-check

let playerControls = document.getElementById("player-controls");

let btnRock = document.getElementById("btn-rock");

let btnPaper = document.getElementById("btn-paper");

let btnScissors = document.getElementById("btn-scissors");


function rockClicked(rock) {
    console.log(rock, " was selected");
}

btnRock?.addEventListener("click", rockClicked)


function paperClicked(paper) {
    console.log(paper, " was selected");
}

btnPaper?.addEventListener("click", paperClicked)


function scissorsClicked(scissors) {
    console.log(scissors, " was selected");
}

btnScissors?.addEventListener("click", scissorsClicked)