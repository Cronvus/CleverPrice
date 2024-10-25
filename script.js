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


const group1Div = document.querySelector('.group1'); // Получаем блок group1
const group2Div = document.querySelector('.group2'); // Получаем блок group2

function toggleGroups() {
    if (group1Div.classList.contains('visible-group')) {
        // Если group1 видимый, скрываем его и показываем group2
        group1Div.classList.remove('visible-group');
        group1Div.classList.add('hidden-group');
        
        group2Div.classList.remove('hidden-group');
        group2Div.classList.add('visible-group');
    } else {
        // Если group2 видимый, скрываем его и показываем group1
        group2Div.classList.remove('visible-group');
        group2Div.classList.add('hidden-group');

        group1Div.classList.remove('hidden-group');
        group1Div.classList.add('visible-group');
    }
}

// Запускаем цикл переключения каждые 6 секунд
setInterval(toggleGroups, 10000);


