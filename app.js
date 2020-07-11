var hour = 0;
var min = 0;
var sec = 0;
var mili = 0;

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var miliHeading = document.getElementById("mili");

var interval;

function checkValue(n){
    if(n < 10){
        n = '0' + n;
    }
    return n;
}

function timer(){
    mili++;
    miliHeading.innerHTML = checkValue(mili);
    if(mili == 100){
        sec++;
        secHeading.innerHTML = checkValue(sec);
        mili = 0;
    }
    else if(sec > 59){
        min++;
        minHeading.innerHTML = checkValue(min);
        sec = 0;
        secHeading.innerHTML = checkValue(sec);
    }
    else if(min > 59){
        hour++;
        hourHeading.innerHTML = checkValue(hour);
        min = 0;
        minHeading.innerHTML = checkValue(min);
    }
}

function start(){
    var btnStart = document.getElementById("btnStart");
    btnStart.style.display = "none";
    var btnStop = document.getElementById("btnStop");
    btnStop.style.display = "inline-block";
    interval = setInterval(timer, 10);
}

function stop(){
    var btnStop = document.getElementById("btnStop");
    btnStop.style.display = "none";
    var btnStart = document.getElementById("btnStart");
    btnStart.style.display = "inline-block";
    clearInterval(interval);
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    mili = 0;
    hourHeading.innerHTML = '0' + hour;
    minHeading.innerHTML = '0' + min;
    secHeading.innerHTML = '0' + sec;
    miliHeading.innerHTML = '0' + mili;
    stop();
}