"use strict"
const rs = require("readline-sync");
let month = String(rs.question("En quel mois sommes-nous ?"));

if (month === "Janvier" || month === "Mars" || month === "Mai" || month ==="Juillet" || month === "Août" || month === "Octobre" || month === "Décembre") {
    console.log("Il y a 31 jours en " + month);
}
else if (month === "Avril" || month === "Juin" || month === "Septembre" || month === "Novembre") {
    console.log("Il y a 30 jours en " + month);
}
else if (month === "Fevrier") {
    console.log("Il y a 28 jours en " + month );
}
else{
    console.log("Veuillez saisir un mois");
}