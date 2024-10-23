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
// тестирую таймеры
let currentDiv = 0;
const units = document.querySelectorAll('.units1');

// Показываем первый div изначально
units[currentDiv].style.display = 'block';

setInterval(() => {
    // Скрываем текущий div
    units[currentDiv].style.display = 'none'; 

    // Переходим к следующему
    currentDiv = (currentDiv + 1) % units.length; 

    // Показываем новый div
    units[currentDiv].style.display = 'block'; 
}, 3000); // Меняет div каждые 3 секунды
