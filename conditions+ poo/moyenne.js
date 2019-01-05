"use strict"
let moyenne = [10, 20, 17, 16, 18, 15, 19];
let i = 0;
for (i=0; i< moyenne.length; i++){
    console.log(moyenne[i]);
}
let s = 0;
let j = 0;
while (j < moyenne.length){
    console.log(s = s + moyenne[j]);
    j++;
}
let result = s / moyenne.length;
console.log("La moyenne est de " + result);
