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


