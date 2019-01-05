"use strict"
let t = [4, -9, 12, 30, 38, 42];
let i= 0;
let max = t[i];
while (i < t.length){
    if(t[i] > max){
    max = t[i]; 
    }
    i++;
}
console.log(max);