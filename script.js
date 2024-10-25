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


let currentIndex = 0; // Начальный индекс

// Получаем все блоки group1 и group2
const group1Divs = document.querySelectorAll('.group1'); 
const group2Divs = document.querySelectorAll('.group2');

function toggleGroups() {
    // Скрываем текущий group1 и показываем соответствующий group2
    group1Divs[currentIndex].classList.remove('visible-group');
    group1Divs[currentIndex].classList.add('hidden-group');

    group2Divs[currentIndex].classList.remove('hidden-group');
    group2Divs[currentIndex].classList.add('visible-group');

    // Увеличиваем индекс для следующей итерации
    currentIndex = (currentIndex + 1) % group1Divs.length; // Циклический переход на следующий индекс
}

// Запускаем цикл переключения каждые 6 секунд
setInterval(toggleGroups, 6000);


