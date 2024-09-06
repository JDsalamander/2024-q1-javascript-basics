//@ts-check

let playerControls = document.getElementById("player-controls");

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


function playerControlHandler(e) {
    let weaponName = e.target.innerText;
    console.log( weaponName, "was selected");
}

playerControls?.addEventListener("click", playerControlHandler);