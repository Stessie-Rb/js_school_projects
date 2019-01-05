/*Phase 1:
-Analyse du probleme
>simon est un jeu de reconnaissance visuel et sonore, le but est de reproduire de manière exacte une combinaison de 
messages proposé par l'ia.
 
-le reflexion se decoupe en plusieurs étapes

1. présenter dans un premier temps des variables au nombre de 4  qui vont s'afficher de maniere aleatoire. "random"

2  receptionner et stocker les reponses du joueur

3  analyser la reponse du joueur en verifiant la concordance avec la proposition

nous aurons alors 2 possibilites

a :la reponse est exacte et le joueur continue                      "bool"
b : elle n'est pas exacte et le joueur recommence

 >si a: l'ia augmente la proposition d'une unite (repétition d'une variable)  "push"
 >répétition de la phase 2 et 3 ensuite

nous revenons alors aux  2 possibilités*/

"use strict"

/*déclarer l'IA*/
let IA = ["rouge", "vert", "jaune", "bleu"];

/*initialiser le compteur de score*/
let score = 0;

/*affecter une valeur random à l'IA*/
let randIA = (IA[Math.floor(Math.random() * 4)]);

/*l'afficher*/
console.log(randIA);

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

function gameover(){

    console.log("Perdu -_-, ton score final est de " + score);
        const r = require("readline-sync");
        let answer = String(r.question("Et si on rejouait ?"));

        if (answer === "Oui" || answer === "OUI" || answer === "oui") {
            /* clean mémoire de l'IA, retour au début*/
            randIA = "";
            tourSuivant();
        }
        else if (answer !== "oui" || answer !== "Oui" || answer !== "OUI") {
            console.log("Dommage... Reviens une rochaine fois pour améliorer ton reccord! ");
        }
}

/* demander la réponse de l'User*/
const u = require("readline-sync");
let User = String(u.question("Quelle est ta réponse?"));
while (User !== randIA){
    gameover();
}

/*la comparer avec IA*/
while (User === randIA) {
    tourSuivant();
    score++;
    console.log("Ton score est de : " + score);
    /*saisie différente*/
    if (User !== randIA) {
        gameover();
    }
}

