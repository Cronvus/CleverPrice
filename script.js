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

    // Скрываем текущий блок group1 и показываем соответствующий ей group2
    currentGroup1.classList.remove('visible-group');
    currentGroup1.classList.add('hidden-group');

    // Появление следующего блока group2
    setTimeout(() => {
        currentGroup2.classList.remove('hidden-group');
        currentGroup2.classList.add('visible-group');
    }, 500); // Задержка для анимации исчезновения

    // Увеличиваем индекс, чтобы переключаться на следующий блок
    currentGroupIndex = (currentGroupIndex + 1) % group1Divs.length; // Циклический переход на следующий блок

    // Очистка обратно
    setTimeout(() => {
        const nextGroup1 = group1Divs[currentGroupIndex]; // Следующий group1
        const nextGroup2 = group2Divs[currentGroupIndex]; // Следующий group2
        
        // Скрытие нового group2 и показ нового group1
        nextGroup2.classList.remove('visible-group');
        nextGroup2.classList.add('hidden-group');
        
        setTimeout(() => {
            nextGroup1.classList.remove('hidden-group');
            nextGroup1.classList.add('visible-group');
        }, 500); // Плавная анимация
    }, 6000); // Общее время ожидания между полными заменами
}

// Запускаем цикл переключения
setInterval(toggleGroups, 6000); // Вызов функции каждые 6 секунд


