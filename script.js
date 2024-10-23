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
let isGroup1Visible = true; // Начинаем с первой группы

setInterval(() => {
    const group1 = document.querySelectorAll('.group1');
    const group2 = document.querySelectorAll('.group2');

    if (isGroup1Visible) {
        group1.forEach(div => div.style.display = 'none'); // Скрываем первую группу
        group2.forEach(div => div.style.display = 'block'); // Показываем вторую группу
    } else {
        group1.forEach(div => div.style.display = 'block'); // Показываем первую группу
        group2.forEach(div => div.style.display = 'none'); // Скрываем вторую группу
    }

    isGroup1Visible = !isGroup1Visible; // Переключаем состояние
}, 3000); // Меняет группы каждые 3 секунды
