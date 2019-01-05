"use strict"
const readlineSync = require('readline-sync');
let day = readlineSync.question("Quel jour sommes-nous?");

if (day === "Lundi" || day === "lundi" || day === "LUNDI") {
    console.log("Demain nous serons Mardi");
}
else if (day === "Mardi" || day === "mardi" || day === "MARDI") {
    console.log("Demain nous serons Mercredi");
}
else if (day === "Mercredi" || day === "mercredi" || day === "MERCREDI") {
    console.log("Demain nous serons Jeudi");
}
else if (day ==="Jeudi" || day === "jeudi" || day === "JEUDI") {
    console.log("Demain nous serons Vendredi");
}
else if (day === "Vendredi" || day === "vendredi" || day === "VENDREDI") {
    console.log("Demain nous serons Samedi");
}
else if (day === "Samedi" || day === "samedi" || day === "SAMEDI") {
    console.log("Demain nous serons Dimanche");
}
else if (day === "Dimanche" || day === "diamnche" || day === "DIMANCHE") {
    console.log("Demain nous serons Lundi");
}
else {
    console.log("Merci d'entrer un jour valable");
}