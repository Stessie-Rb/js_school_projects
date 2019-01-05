"use strict";

// 1ere version

function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);


// 2eme version : On ecrira plutot comme ça, à l'aide d'une fonction anonyme
document.getElementById("bouton").addEventListener("click", function () {
    console.log("Clic !");
});

// 3eme version : On peut aussi écrire avec une arrow function
document.getElementById("bouton").addEventListener("click", () => {
    console.log("Clic !");
});

// Récupération des infos à l'événement
// Propriétés disponibles : 
//      - type, 
//      - target (zone cliquée), 
//      - currentTarget (élément porteur du gestionnaire d'event).
document.getElementById("bouton").addEventListener("click", (e) => {
    console.log("Event " + e.type + "- Texte de la cible " + e.target.textContent);
});

