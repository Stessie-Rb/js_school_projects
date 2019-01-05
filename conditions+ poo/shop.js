"use strict"
class Panier{
    constructor (clientName){
        this.clientName = clientName;
        this.contenu = [];
        this.somme = 0;
    }
    add(produit){
        this.contenu.push(produit);
        this.somme += Produit.prix;
    }
    remove(produit){
        this.contenu.pop(produit);
        this.somme = somme - Produit.prix;
    }
    getContenu(){
        return this.contenu;
    } 
    getSomme(){
        return this.somme;
    }

}
class Produit{
    constructor(nom, prix){
        this.nom = nom; 
        this.prix = prix;
    }
}
let commande1 = new Panier ("Commande M Saturne");
let article1 = new Produit("Peluche licorne", 40);
commande1.add(article1);
console.log(commande1.getContenu(), commande1.getSomme());