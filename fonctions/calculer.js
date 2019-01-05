"use strict"
function calculer(n1, operateur, n2){
    if (operateur === "+"){
        let addition = n1 + n2;
        return addition; 
    }
    else if (operateur === "-"){
        let soustraction = n1 - n2;
        return soustraction;
    }
    else if (operateur === "*" || operateur === "x" || operateur === "X"){
        let multiplication = n1 * n2;
        return multiplication;
    }
    else if (operateur === "/" || operateur === ":"){
        let division = n1 / n2;
        return division;
    }    
}
console.log(calculer(3, "x", 3));
console.log(calculer(4, "+", 6)); 
console.log(calculer(4, "-", 6)); 
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0)); 