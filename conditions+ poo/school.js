"use strict"
class School{
    constructor(nom, niveau){
        this.nom= nom; 
        this.niveau= niveau;
        this.eleve= Student.name + Student.prenom;
    }
    inscrire(Student){
        console.log(Student.name + " " + Student.prenom + " né(e) le " + Student.dateNaissance + " est bien inscris à : " + this.nom);
    }
}
class Student{
    constructor(name, prenom, dateNaissance){
        this.name = name;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
}
let School1 = new School ("La petite école", "Ecole maternelle");
let Student1 = new Student ("gaia", "centauri", "27.02.1994"); 
console.log(School1.inscrire(Student1));

/*class Ecole{
    constructor(nom){
        this.nom = nom;
        this.eleves = [];
    }
    inscrire(Eleve){
        this.eleves.push(eleve);
    }
    getEleves(){
        return this.eleves;
    }
}
class Eleve{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
}
let ecole = new Ecole("La Petite Ecole"); 
let eleve1= new Eleve("Little", "Gaïa");
ecole.inscrire(eleve1);
console.log(ecole.getEleves()); */
