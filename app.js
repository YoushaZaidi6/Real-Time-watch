// Real-time watch
let day = document.getElementById("day");
let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let date = document.getElementById("date");
let monthnames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
let month = document.getElementById("month")
let year = document.getElementById("year");

setInterval(() => {
    let currentTime = new Date();

    let currentDay = dayNames[currentTime.getDay()];
    day.innerHTML = currentDay;
    date.innerHTML = currentTime.getDate();
    let currentMonth = monthnames[currentTime.getMonth()];
    month.innerHTML = currentMonth;
    year.innerHTML = currentTime.getFullYear();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

// Stopwatch
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let stopwatchTimeRef = document.querySelector(".timer-display");
let stopwatchInterval = null;

document.getElementById("start-stopwatch").addEventListener("click", () => {
    if (stopwatchInterval !== null) {
        clearInterval(stopwatchInterval);
    }
    stopwatchInterval = setInterval(displayStopwatch, 10);
});

document.getElementById("pause-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
});

document.getElementById("reset-stopwatch").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    stopwatchTimeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayStopwatch() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds 
        : milliseconds;

    stopwatchTimeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}



// page change buttons

function buttons(){
    window.location.href = "index.html"
}
function buttons1(){
    window.location.href = "stop-watch.html"
}









