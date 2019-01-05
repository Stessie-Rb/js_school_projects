/*créer un event qui 
crée un element li a chaque fois 
qu'on clique sur le bouton ajouter dessert
lui donner un parent*/
//!impossible d'ajouter un addEventListener sur un getElementsByTagName car il retourne la liste de tous les éléments avec ce tag sous forme de tableau 
let buttons = document.getElementsByTagName("button");
console.log(buttons);
buttons[0].addEventListener("click", () => {
    let nouveauDessert = prompt("Quel dessert te ferait plaisir")
    let addDessert = document.createElement("li"); //Créer un élément li
    addDessert.id = nouveauDessert; //Définir son identifiant
    addDessert.textContent = nouveauDessert; //Definir son contenu textuel 
    document.getElementById("desserts").appendChild(addDessert);
});

