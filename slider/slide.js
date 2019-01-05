"use strict"
let slider = document.getElementsByClassName('slide'); //tableau contenant les slides
console.log(slider); 

let i = 0; //index du tableau 
console.log(slider[i]);

let before = document.getElementById('prev'); //nav 
let suivante = document.getElementById('next');

before.addEventListener("click", () => { //quand on clique sur before
    i = i - 1; //mise à jour de i 
    if (i < 0) { //si i est négatif (plus petit que la longueur du tableau) i revient à la dernière case du tableau
        i = slider.length - 1;
    }
    showSlider(slider[i]);//afficher le slider
});
suivante.addEventListener("click", () => {//quand on clique sur suivant
    i = i + 1; //mise à jour de i 
    if (i > slider.length - 1) { //si i est supérieur à la longueur du tableau 
        i = 0; //i revient à 0 
    }
    showSlider(slider[i]);
});
document.addEventListener("keyup", (e) => { //quand on clique dans la page
    if (e.keyCode === 37) {//si le keyCode de la touche est égal au code de la touche gauche
        i = i - 1;//fonction précédente
        if (i < 0) {
            i = slider.length - 1;
        }
        showSlider(slider[i]);
    }
    if (e.keyCode === 39) {
        i = i + 1;
        if (i > slider.length -1){
            i= 0;
        }
        showSlider(slider[i]);
    }   
})
function showSlider() {
    let j = 0; // i index dans le tableau j parcours le tableau 
    while (j < slider.length) {//tant que j est plus petit que la taille du tableau d'images
        if (j === i) {//si j est égal a i on affiche l'image
            slider[j].style.display = 'block';
        }
        else {//sinon hide
            slider[j].style.display = 'none';
        }
        j++; //incrémenter j
    }


}
let boutons = document.getElementsByTagName('button');//affichage des boutons 
let b = 0;
document.addEventListener("keyup", () =>{
    if (b < boutons.length){
      boutons[b].style.display = 'block';  
    }
    else{
        showSlider();
    }
    b++;
})