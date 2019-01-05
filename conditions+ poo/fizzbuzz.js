"use strict"
const r = require("readline-sync");
let number = r.question("Saisissez un nombre ");
if (number >= 0 && number <= 100){
    if (number % 3 === 0){
    number = "Fizz";
    console.log(number);
    }
    else if (number % 5 === 0){
    number = "Buzz";
    console.log(number);
    }
    else if (number %  3 === 0 && number % 5 === 0){
    number = "FizzBuzz";
    console.log(number);
    }
    else{
        console.log(number);
    }
}