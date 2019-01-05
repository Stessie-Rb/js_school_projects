"use strict"

console.log("Console: Hello world!");
alert("Hello :)");

let monTitre = document.getElementById("monTitreId");
alert(monTitre.innerHTML);

/*console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("p"));*/
let resultH1 = document.getElementsByTagName("h1");
let resultP = document.getElementsByTagName("p");
console.log("Il y a : " + resultH1.length + " H1");
console.log("Il y a : " + resultP.length + " p.");



let para1 = document.querySelector('p').innerHTML;
let para2 = document.querySelector('p').textContent;

alert("InnerHTML de p " + para1 + " -> renvoie le texte et les balises contenus dans une balise HTML \n" +
       "\n\ntextcontent de p: \n" + para2);
       
document.querySelector('p').textContent = "nouveau texte";


