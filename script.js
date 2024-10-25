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


let currentGroupIndex = 0; // Индекс текущей группы
const group1Divs = document.querySelectorAll('.group1');
const group2Divs = document.querySelectorAll('.group2');

function toggleGroups() {
    // Получаем текущие группы
    const currentGroup1 = group1Divs[currentGroupIndex];
    const currentGroup2 = group2Divs[currentGroupIndex];

    // Скрываем текущий блок group1
    currentGroup1.classList.remove('visible-group');
    currentGroup1.classList.add('hidden-group');

    // Появление следующего блока group2
    setTimeout(() => {
        currentGroup2.classList.remove('hidden-group');
        currentGroup2.classList.add('visible-group');

        // Переключаем индекс для следующего блока
        currentGroupIndex = (currentGroupIndex + 1) % group1Divs.length; // Циклический переход
    }, 300); // Задержка для анимации исчезновения
}

// Запускаем цикл переключения
setInterval(toggleGroups, 3000); // Каждые 6 секунд, включая анимацию


