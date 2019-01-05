"use strict";

/*document.getElementById("pId").addEventListener("click", () => {
    console.log("Clic paragraph!");
});

document.getElementById("bouton").addEventListener("click", () => {
    console.log("Clic bouton !");
});*/

// TODO : essayer avec true comme dernier parametre dans addEventListener

// Tester stopPropagation 

document.getElementById("pId").addEventListener("click", () => {
    console.log("Clic paragraph!");    
}, true);

document.getElementById("bouton").addEventListener("click", (e) => {
    console.log("Clic bouton !");
   // e.stopPropagation();
});
