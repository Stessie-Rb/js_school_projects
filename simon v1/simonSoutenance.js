/* variables */
let ia = ["r", "v", "j", "b"];
let random = (ia[Math.floor(Math.random() * 4)]);
let score = 0;
let user = "";

const readlineSync = require('readline-sync');
const menu = require('readline-sync');
const replay = require('readline-sync');

/* fonctions */
function lancement() {
    random = (ia[Math.floor(Math.random() * 4)]);
    console.log(random);
    let user = readlineSync.question("Votre proposition: ");
    return user;
}
function reset() {
    answerReplay = "";
    random = "";
    user = "";
    score = 0;
    profile = "";

}
function push() {
    random = random + (ia[Math.floor(Math.random() * 4)]);
    return random;
}

function tourSuivant() {
    push();
    console.log(random);
    user = readlineSync.question("Votre proposition: ");
}
function gameover() {
    console.log("Perdu " + profile + ", ton score est de " + score + " points");
    let answerReplay = String(replay.question("Relancer une partie ?"));

    if (answerReplay === "Oui" || answerReplay === "OUI" || answerReplay === "oui") {
        reset();
        profile = (menu).question("A qui ai-je l'honneur cette fois ci ?")
    } else if (answerReplay !== "Oui" || answerReplay !== "OUI" || answerReplay !== "oui") {
        console.log("A plus tard " + profile + " !")
        start = "non";
    }
}

function moteur() {
    while (user === random) {
        tourSuivant();
        score++;
    }
}



/*MENU*/
let start = (menu).question("Voulez-vous jouer, a un petit jeu ?!")
let profile = (menu).question("Quel est ton pseudo ?")

while (start === "Oui" || start === "OUI" || start === "oui") {

    if (random = '') {
        lancement();
    }

    if (user === random) {
        moteur();
    }

    if (user !== random) {
        gameover();
    }
}