"use strict"
const nh = require("readline-sync");
let heure = Number(nh.question("Indiquez les heures: "));
let minutes = Number(nh.question("Indiquez les minutes"));
let secondes = Number(nh.question("Indiquez les secondes"));
if (heure >=0 && heure <= 23 && minutes >= 0 && minutes <= 59 && secondes >= 0 && secondes <= 59){
    secondes++;
    if (secondes === 60){
        minutes++;
    }
    if (minutes === 60){
        heure ++;
    }
    if (heure === 23){
        heure = 0;
    }
}
console.log("Dans une seconde il sera " + heure + " h " + minutes + " mn " + " et " + secondes + " secondes" );
