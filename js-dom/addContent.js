"use strict"
let python = document.createElement("li"); //Créer un élément li
python.id = "python"; //Définir son identifiant
python.textContent = "Python"; //Definir son contenu textuel 
document.getElementById("langages").appendChild(python); //Lui attribuer des parents


 /*autre manière d'écrire*/
 let rubyElt = document.createElement("li");
 rubyElt.id = "ruby";
 rubyElt.appendChild(document.createTextNode("Ruby"));
 document.getElementById("langages").appendChild(rubyElt);

 
 //insérer entre deux éléments existants
let perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, 
    document.getElementById("php"));
