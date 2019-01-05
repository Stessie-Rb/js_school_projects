"use srict"
let ia = ["r", "v", "j", "b"];
let random = (ia[Math.floor(Math.random() * 4)]);
let score = 0;
let user = "";

const readlineSync = require('readline-sync');
const menu = require('readline-sync');
const replay = require('readline-sync');

class Simon{
    constructor(ia, score){
        this.ia = ia;
        this.score = score;
    }
    init(){
        init.player();
    }
    lancement() {
        random = (ia[Math.floor(Math.random() * 4)]);
        console.log(random);
        user = readlineSync.question("Votre proposition: ");
        return user;
    }
    reset() {
        answerReplay = "";
        random = "";
        user = "";
        score = 0;
        profile = "";
    
    }
    push() {
        random = random + (ia[Math.floor(Math.random() * 4)]);
        return random;
    }
    
    tourSuivant() {
        push();
        console.log(random);
        user = readlineSync.question("Votre proposition: ");
    }
    gameover() {
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
    
    moteur() {
        while (user === random) {
            tourSuivant();
            score++;
        }
    }

}

class Player{
    constructor(pseudo, saisie){
        this.pseudo = pseudo;
        this.saisie = saisie;
    }
    init(){
        let start = (menu).question("Voulez-vous jouer, a un petit jeu ?!");
        let profile = (menu).question("Quel est ton pseudo ?");
        user = "";
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
    }

}
let joueur1 = new Player ("Jack", "");
console.log(joueur1.init());
