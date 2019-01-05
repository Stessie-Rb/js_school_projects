"use strict"
const readlineSync = require('readline-sync');
const menu = require('readline-sync');
const replay = require('readline-sync');

let start = (menu).question("Voulez-vous jouer, a un petit jeu ?!")
let profile = (menu).question("Quel est ton pseudo ?")
let answerReplay

class Simon{
    constructor(){
        this.ia = ["r", "v", "j", "b"];
        this.random = (this.ia[Math.floor(Math.random() * 4)]);
        this.score = 0;
        this.user = "";
    }
    lancement() {
        this.random = (ia[Math.floor(Math.random() * 4)]);
        console.log(random);
        let user = readlineSync.question("Votre proposition: ");
        return user;
    }
    reset() {
        answerReplay = "";
        this.random = "";
        this.user = "";
        this.score = 0;
        profile = "";
    
    }
    push() {
        this.random = this.random + (this.ia[Math.floor(Math.random() * 4)]);
        return this.random;
    }
    
    tourSuivant() {
        this.push();
        console.log(this.random);
        this.user = readlineSync.question("Votre proposition: ");
    }
    gameover() {
        console.log("Perdu " + profile + ", ton score est de " + this.score + " points");
        answerReplay = String(replay.question("Relancer une partie ?"));
    
        if (answerReplay === "Oui" || answerReplay === "OUI" || answerReplay === "oui") {
            this.reset();
            profile = (menu).question("A qui ai-je l'honneur cette fois ci ?")
        } else if (answerReplay !== "Oui" || answerReplay !== "OUI" || answerReplay !== "oui") {
            console.log("A plus tard " + profile + " !")
            start = "non";
        }
    }
    
    moteur() {
        while (this.user === this.random) {
            this.tourSuivant();
            this.score++;
            console.log(this.score);
        }
    }
    
    
    boucle() {
        while (start === "Oui" || start === "OUI" || start === "oui") {
    
        if (this.random = '') {
            this.lancement();
        }
    
        if (this.user === this.random) {
            this.moteur();
        }
    
        if (this.user !== this.random) {
            this.gameover();
        }
    }
}
}
let partie1 = new Simon();
partie1.boucle();