// Js
$('.buttonsimon').css('position','relative');
$('.buttonsimon').css('z-index','2000');
let audio = new Audio('');
 

$('#hautGauche').click(function (){
    alert("Vert !");
    audio.src = 'sounds/son1.mp3';
    audio.play();
})
$('#hautDroite').click(function (){
    alert("Rouge !");
    audio.src = 'sounds/son2.mp3';
    audio.play();
})
$('#basGauche').click(function (){
    audio.src = 'sounds/son3.mp3';
    audio.play();
    alert("Jaune !");
})
$('#basDroite').click(function (){
    audio.src = 'sounds/son4.mp3';
    audio.play();
    alert("Bleu !");
})
class Image {
    constructor(id, src, alt, text) {
        this.id = id;
        this.src = src;
        this.alt = alt;
        this.text = text;


    }
}
class Slider {

    constructor() {
        this.images = [
            new Image("slider", "images/slider1.jpg", "simonO", "Bienvenue dans le monde de Simon"),
            new Image("slider", "images/slider2.jpg", "simon1", "Suivez les instructions"),
            new Image("slider", "images/slide3.jpg", "simon2", "Répetez les couleurs que simon qui indique ")
        ];
        this.i = 0;
    }

    changerAGauche() {
        this.i--;
        if (this.i < 0) {
            this.i = this.images.length - 1;
        }
        let imgElt = document.getElementById("slider");
        imgElt.src = this.images[this.i].src;


    }

    changerADroite() {
        this.i++;
        if (this.i > this.images.length - 1) {
            this.i = 0;
        }
        let imgElt = document.getElementById("slider");
        imgElt.src = this.images[this.i].src;


    }



}



let s = new Slider();
let flecheg = document.getElementById("flecheg");
let fleched = document.getElementById("fleched");

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 39) {
        s.changerADroite();

    }
    if (e.keyCode === 37) {
        s.changerAGauche()
    }
});

flecheg.addEventListener("click", () => {

    s.changerAGauche();
// $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" ); a voir  pour inserer le texte dans le slider
});
fleched.addEventListener("click", () => {

    s.changerADroite();

});
