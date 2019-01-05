"use strict"
class MyCar {
    constructor(immat, marque, modele, couleur, nombrePortes, puissance, carburant) {
        this.immat = immat;
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.nombrePortes = nombrePortes;
        this.moteur = new Moteur(puissance, carburant);

    }
    avance() {
        let avance = "Avance " + this.marque + " " + this.modele;
        return avance; 

    }
    recule() {
        let recule = "Recule " + this.marque + " " + this.modele;
        return recule;

    }
    demarre() {
        let demarre = "Démarrer " + this.marque + " " + this.modele + " avec un moteur d'une puissance de : " + this.moteur.puissance + " énergie : " + this.moteur.carburant + " " + this.moteur.demarrer();
        return demarre; 

    }
    stoppe() {
        let stop = "Stop! " + this.marque + " " + this.modele;
        return stop;

    }
    run(){
        let run = "Ma voiture est une " + this.marque + " " + this.modele;
        return run 
    }
}
class Moteur {
    constructor(puissance, carburant) {
        this.puissance = puissance;
        this.carburant = carburant;
    }
    demarrer(){
        let start = "Let's go";
        return start;

    }
    stoppe(){
        let stop = "Stop now";
        return stop;
    }
}

let firstCar = new MyCar ("AA-123-AA", "Ford", "Licorne", "Rose", 3, "200", "Hybride");
console.log(firstCar.demarre());
