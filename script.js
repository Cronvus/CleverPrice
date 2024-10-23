let buttonClock = document.querySelector(`.clockButton`);
let UltClock = document.querySelector('.UltClock');
let buttonDrill = document.querySelector(`.drillButton`);
let UltDrill = document.querySelector('.UltDrill');

function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("digitalClock()", 1000);
}
window.onload = digitalClock;

buttonClock.addEventListener('click', function(evt) {
    evt.preventDefault();
    UltClock.classList.toggle("hidden");
})
buttonDrill.addEventListener('click', function(evt) {
    evt.preventDefault();
    UltDrill.classList.toggle("hidden");
})
// Test Timers
function toggleDiv() {
    const group1Div = document.getElementById("group1");
    const group2Div = document.getElementById("group2");

    // Проверяем текущее состояние видимости
    if (group1Div.style.display === "none") {
        group1Div.style.display = "block"; // Показываем group1
        group2Div.style.display = "none";   // Скрываем group2
    } else {
        group1Div.style.display = "none";    // Скрываем group1
        group2Div.style.display = "block";   // Показываем group2
    }
}

// Устанавливаем интервал на 3 секунды (3000 мс)
setInterval(toggleDiv, 10000);
