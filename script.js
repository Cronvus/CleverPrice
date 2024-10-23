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
function replaceDiv() {
    const axeDiv = document.getElementById("Axe");
    const arachnidDiv = document.getElementById("Arachnid");

    // Скрываем первый див и показываем новый
    axeDiv.style.display = "none"; // Скрываем Axe
    newDiv.style.display = "block"; // Показываем новый див
}

// Заменяем через 3 секунды (3000 мс)
setTimeout(replaceDiv, 3000);
