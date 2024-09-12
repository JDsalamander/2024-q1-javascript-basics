//@ts-check

let playerControls = document.getElementById("player-controls");

//game-results
/** @type { HTMLElement } */
//@ts-ignore We know game results header is not null
let gameResultsHeader = document.getElementById("game-results");

gameResultsHeader.innerText = "Hey there!!";

let isGameOver = false
let weapons = [
    {
        type: "Boulder",
        beats: "Sword"
    },
    {
        type: "Book",
        beats: "Boulder"
    },
    {
        type: "Sword",
        beats: "Book"
    }
];

function pickRandomWeapon(weapons) {
    let rnJesus = Math.floor(Math.random() * weapons.length);
    return weapons[rnJesus];
}

function determineOutcome(playerWeapon, computerWeapon) {
    if (playerWeapon.type === computerWeapon.type) {
        return "It's a tie! try again"
    }
    
    if(playerWeapon.beats === computerWeapon.type) {
        isGameOver = true
        return `Player winz! ${playerWeapon.type} beats ${computerWeapon.type}`;
    }
    isGameOver = true
    return `Computer winz! ${computerWeapon.type} beats ${playerWeapon.type}`
}

function playerControlHandler(e) {
    if(isGameOver) {
        return;
    }

    let weaponName = e.target.innerText;
    let playerWeapon = weapons.find(w => w.type === weaponName);

    if(!playerWeapon) {
        console.log("ERROR! Player Weapon undifined")
    }
    let computerWeapon = pickRandomWeapon(weapons);
    let result = determineOutcome(playerWeapon, computerWeapon);
    gameResultsHeader.innerText = result;
    console.log(result);
}

playerControls?.addEventListener("click", playerControlHandler);