window.onload = function () {
    var horse1 = document.getElementById("horse1");
    var horse2 = document.getElementById("horse2");
    var info = document.getElementById("info");
}

function startRace() {
    document.getElementById("board").style.background = "blue";
    document.getElementById("startButton").disabled = true;
    var position1 = 0;
    var position2 = 0;
    var t = setInterval(run, 20);
    var circuitLength = window.innerWidth - 380;
    function run() {
        if ((position1 > (circuitLength)) || (position2 > (circuitLength))) {
            clearInterval(t);
            document.getElementById("startButton").disabled = false;
            if (horse1.offsetLeft > horse2.offsetLeft) {
                document.getElementById("board").style.background = "green";
                info.innerHTML = "Monte hat das Ziel erreicht.<br> Gewonnen!!";
            }
            else {
                document.getElementById("board").style.background = "red";
                info.innerHTML = "Max hat das Ziel erreicht.<br> Leider hat Monte verloren :(";
            }
        }
        else {
            position1 += Math.floor((Math.random() * 10) + 1);
            position2 += Math.floor((Math.random() * 10) + 1);
            horse1.style.left = position1 + "px";
            horse2.style.left = position2 + "px";
            if (horse1.offsetLeft >= horse2.offsetLeft) {
                info.innerHTML = "Monte ist vorne!";
            }
            else {
                info.innerHTML = "Max ist vorne!";
            }
        }
    }

}