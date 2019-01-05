"use strict"
const rl = require("readline-sync");
let moyenne = Number(rl.question("Moyenne ?"));


if (moyenne <10) {
    console.log("Le candidat est recalé");
}
else if (moyenne >=10 && moyenne <12) {
    console.log("Le candidat est reçu")
}
else if (moyenne >=12) {
    console.log("Le candidat est reçu avec mention");
}
else {
    console.log("Entrez un nombre svp");
}