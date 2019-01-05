var seconds = Number(document.getElementById("seconds"));
seconds = setInterval(countUp, 1000);
var countUp = function() {
    seconds = seconds++;
    seconds.innerHTML = seconds; 
};