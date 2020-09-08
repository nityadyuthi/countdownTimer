// Global Variables
var interval, interval1;
var k = 0, i = 0;

// Functions for Buttons
function stop() {
    clearInterval(interval);
    clearInterval(interval1);
    document.getElementById("over").innerHTML = "Stopped!"
    document.getElementById("over").style.display = "";
}

function start() {
    interval1 = setInterval(decrement, 1000);
    let inputTime = document.getElementById("seconds").value;
    i = inputTime;
    function decrement() {
        if (i >= 0) {
            document.getElementById("timer").value = i;
            document.getElementById("timer").innerHTML = i + "seconds to go";
            i = i - 1;
        } else {
            clearInterval(interval1);
        }
    }
}

function play() {
    document.getElementById("over").style.display = "none";
    interval = setInterval(decrement, 1000);
    let inputTime = document.getElementById("timer").value;
    i = inputTime;
    function decrement() {
        if (i >= 0) {
            document.getElementById("timer").value = i;
            i = i - 1;
        } else {
            clearInterval(interval);
        }
    }
}

function pause() {
    clearInterval(interval);
    clearInterval(interval1);
    document.getElementById("over").innerHTML = "Paused!"
    document.getElementById("over").style.display = "";
}


function lap() {
    k++;
    var tag = document.createElement("p");
    var j = document.getElementById("timer").value;
    console.log(j);
    var text = document.createTextNode("#" + k + " " + j);
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}