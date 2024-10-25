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


let currentGroup1Index = 0; // Индекс для group1
let currentGroup2Index = 0; // Индекс для group2)

// Получаем все блоки group1 и group2
const group1Divs = document.querySelectorAll('.group1'); 
const group2Divs = document.querySelectorAll('.group2');

function toggleGroups() {
    // Скрываем текущий блок group1 и показываем соответствующий блок group2
    group1Divs[currentGroup1Index].classList.remove('visible-group');
    group1Divs[currentGroup1Index].classList.add('hidden-group');

    group2Divs[currentGroup1Index].classList.remove('hidden-group');
    group2Divs[currentGroup1Index].classList.add('visible-group');

    // Увеличиваем индекс для следующей итерации
    currentGroup1Index = (currentGroup1Index + 1) % group1Divs.length; // Циклический переход на следующий индекс

    // Скрываем текущий блок group2 и показываем соответствующий блок group1
    group2Divs[currentGroup2Index].classList.remove('visible-group');
    group2Divs[currentGroup2Index].classList.add('hidden-group');

    group1Divs[currentGroup2Index].classList.remove('hidden-group');
    group1Divs[currentGroup2Index].classList.add('visible-group');

    // Увеличиваем индекс для следующей итерации
    currentGroup2Index = (currentGroup2Index + 1) % group2Divs.length; // Циклический переход на следующий индекс
}

// Запускаем цикл переключения каждые 6 секунд
setInterval(toggleGroups, 6000);


