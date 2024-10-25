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


function toggleGroups() {
    const group1Divs = document.querySelectorAll('.group1'); // Получаем все элементы с классом 'group1'
    const group2Divs = document.querySelectorAll('.group2'); // Получаем все элементы с классом 'group2'

    // Меняем класс: group1 на group2
    group1Divs.forEach(div => {
        div.classList.remove('visible-group');
        div.classList.add('hidden-group');
    });

    // Меняем класс: group2 на group1
    group2Divs.forEach(div => {
        div.classList.remove('hidden-group');
        div.classList.add('visible-group');
    });
}

// Первоначальная смена групп после 3 секунд
setTimeout(() => {
    toggleGroups(); // Смена классов с group1 на group2
}, 3000); // Время в миллисекундах

// Обратная смена групп через 6 секунд (3 секунды после первой смены)
setTimeout(() => {
    toggleGroups(); // Смена классов с group2 обратно на group1
}, 6000); // Время в миллисекундах


