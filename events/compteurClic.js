"use strict"
let count = Number(document.getElementById("compteurClics").textContent); //recupérer la valeur du compteur de clics

document.getElementById("clic").addEventListener("click", () => {//quand on clique sur le bouton
    count ++; //incrémenter le nbre de clics
    document.getElementById("compteurClics").textContent = count; //remplacer le textContent du compteur par la nouvelle valeur
});
document.getElementById('desactiver').addEventListener("click", () => {
    document.getElementById("compteurClics").textContent = 0;
});
//removEventListener au lieu du reset 