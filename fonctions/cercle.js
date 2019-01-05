"use strict"
function area(rayon){
    let aire = Math.PI * rayon * rayon; 
    return aire;
}

function pm(ray){
    let perimetre = 2 * Math.PI * ray;
    return perimetre;
}
console.log("L'aire du cercle est de " + area(8) + "cm");
console.log("Le périmètre du cercle est de " + pm(27) + "cm ");