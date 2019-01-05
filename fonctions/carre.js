"use strict"
function carre(x){
    let nbrcarre = x * x;
    return nbrcarre;
}
console.log(carre(10));
let x = 0;
while (x <= 10){
    console.log(carre(x));
    x++;
}