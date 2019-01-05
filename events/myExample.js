/*function clic (){
    alert("Une licorne sauvage apparaît");
    boutonElt.style.backgroundColor = "pink";
}*/
//phase de capture = quand l'info descends, phase de bouillonnement quand l'event remonte. Passer le paramètre à True pour exécuter l'event en phase de descente 
var boutonElt = document.getElementById("bouton");
var bodyElt = document.getElementsByTagName("body");
// Ajout d'un gestionnaire pour l'événement click
document.getElementById("bouton").addEventListener("click", (e) => {
    alert("Une licorne sauvage apparaît");
    e.target.style.backgroundColor = "pink";
    document.body.style.backgroundImage = "url('profil-slides.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
});
document.getElementById("bouton").addEventListener("click", (e) => {
   e.target.style.color = "white"; 
}, true);
//si on passe le param a false, l'event est bloqué dans la remontée, il n'a pas lieu 
