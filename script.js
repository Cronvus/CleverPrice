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

    // Сначала добавим класс hidden-group для group1
    group1Divs.forEach(div => {
        div.classList.remove('visible-group');
        div.classList.add('hidden-group');
    });

    // После завершения анимации, меняем классы group2
    setTimeout(() => {
        group2Divs.forEach(div => {
            div.classList.remove('hidden-group');
            div.classList.add('visible-group');
        });
    }, 500); // Задержка на время анимации (500 мс)

    // Меняем обратно через 5 секунд
    setTimeout(() => {
        group2Divs.forEach(div => {
            div.classList.remove('visible-group');
            div.classList.add('hidden-group');
        });

        // Меняем классы group1 обратно через 500 мс
        setTimeout(() => {
            group1Divs.forEach(div => {
                div.classList.remove('hidden-group');
                div.classList.add('visible-group');
            });
        }, 500);
    }, 5000); // Время до обратного переключения (5000 мс)
}

// Запускаем цикл переключения
setInterval(toggleGroups, 10000); // Меняем группы каждые 6 секунд, чтобы дать время на обе анимации.


