"use strict"
class Person {
    constructor(name, age, eye, hometown, hair) {
        this.name = name;
        this.age = age;
        this.eye = eye;
        this.hometown = hometown;
        this.hair = hair;
    }
    /*fonction/ methode a écrire dans la class et pas ailleurs */
    displayPerson(){
        let pres = "Hello ! My name is " + this.name;
        pres +=" I am " + this.age + " years old" + "\n";
        pres += "My eyes are " + this.eye + "\n";
        pres += "I live in " + this.hometown + "\n";
        pres += "My hair is " + this.hair;
        return pres;
    }
    sayHello(){
        let  hello = "Bonjour :)" + this.name + "\n";
        return hello;
    }
}
let gaia = new Person("Gaia", 24, "blue", "Vannes", "Pink");
let shawn = new Person("Shawn", 20, "red", "Omega Centauri", "black");
let august = new Person("August", 35, "purple", "Alpha Centauri", "blue");
console.log(gaia.sayHello(), gaia.displayPerson());
/*let perso = [gaia, shawn, august];
for (let i = 0; i < perso.length; i++){
    console.log(perso[i].sayHello(perso[i].name) + "Bonjour");
}

function presentation(p) {
    console.log(p.name + " a " + p.age + " ans" + " il/elle a les yeux " + p.eye + " il/ elle habite " + p.hometown + " et ses cheveux sont: " + p.hair);
}
console.log(presentation(gaia), presentation(shawn), presentation(august));

function displayPerson(p){
    let pres = "Hello ! My name is " + p.name;
    pres +=" I am " + p.age + ".\n";
    pres += "My eyes are " + p.eye + "\n";
    pres += "I live in " + p.hometown;
    console.log(pres);
}
console.log(displayPerson(august));*/
