/*v2*/
const s = require("readline-sync");
const r = require("readline-sync");
const u = require("readline-sync");
let IA = ["rouge", "vert", "jaune", "bleu"];
let randIA = (IA[Math.floor(Math.random() * 4)]);

/*initialiser le compteur de score*/
let score = 0;

/*affecter une valeur random à l'IA*/
let User = "";

function startGame() {
    randIA = (IA[Math.floor(Math.random() * 4)]);
    console.log(randIA);
    User = String(u.question("Quelle est ta réponse?"));
    return User;

}
/*fonction pour ajouter une valeur random à chaque tour réussi*/
function push() {

    randIA = randIA + (IA[Math.floor(Math.random() * 4)]);
    return randIA;

}

function tourSuivant() {

    push();
    console.log(randIA);
    User = String(u.question("Bravo! Quelle est ta nouvelle réponse?"));

}

function gameover() {

    console.log("Perdu -_-, ton score final est de " + score);

    let answer = String(r.question("Et si on rejouait ?"));

    if (answer === "Oui" || answer === "OUI" || answer === "oui") {
        /* clean mémoire de l'IA, retour au début*/
        randIA = "";
        User = "";
        answer = "";
        score = "";

    }
    else if (answer !== "oui" || answer !== "Oui" || answer !== "OUI") {
        console.log("Dommage... Reviens une rochaine fois pour améliorer ton reccord! ");
        start = "non";
    }
}

function round() {
    while (User === randIA) {
        tourSuivant();
        score++;
        console.log("Ton score est de : " + score);

    }
}

let start = String(s.question("Es-tu prêt à jouer avec moi? "));

while (start === "oui" || start === "Oui" || start === "OUI") {
    if (User = "") {
        startGame();
    }
    if (User === randIA) {
        round();
    }
    if (User !== randIA) {
        gameover();
    }
}