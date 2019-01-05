"use strict"
let table = [2, 8, 27, 7];
function displayTable() {
    for (let i = 0; i < table.length; i++){
        console.log(table[i]);
    }
}
displayTable();
for (let i = 0; i < table.length; i++){
    table[i] = table[i] * 2;
}
displayTable();    