"use strict"
// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
let journauxElt = ""; 

for(let i = 0; i < journaux.length; i++){

    journauxElt = document.createElement("a"); //créer un élément lien
    journauxElt.href = journaux [i]; // lui attribuer un attribut href
    journauxElt.id = journaux[i]; // un id 
    journauxElt.textContent = journaux[i]; // définir son contenu
    document.getElementById("contenu").appendChild(journauxElt); //lui donner un parent 

}
// challenge solar system Khan academy créer une planete, l'attacher a body puis créer la lune et l'attacher à planète
/*<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Create a solar system</title>
        <style>
            body {
                background-color: black;
                padding: 10px;
            }
            .planet {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                text-align: center;
                padding: 10px;
                position: relative;
            }
            .moon {
                position: absolute;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: rgb(237, 237, 237);
            }
        </style>
    </head>
    <body>

    
    <script>
        var newplanet = document.createElement("div");
        newplanet.style.backgroundColor= "red";
        newplanet.className = "planet";
        document.body.appendChild(newplanet);
        var newmoon = document.createElement("div");
        newmoon.className = "moon";
        newplanet.appendChild(newmoon);
    </script>
    </body>
</html>*/