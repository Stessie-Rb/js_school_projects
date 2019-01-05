"use strict"
function mini(nbr1, nbr2){
        if (nbr1 < nbr2){
            console.log(nbr1 + " est plus petit que " + nbr2); 
            return nbr1;
        } 
        else{
            console.log(nbr1 + " est plus grand que " + nbr2);
            return nbr2;
        } 
}
console.log(mini(8, 27));