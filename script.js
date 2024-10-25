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


function toggleDiv() {
    const group1Div = document.getElementsById("group1");
    const group2Div = document.getElementsById("group2");

    if (group1Div.classList.contains("visible-group")) {
        group1Div.classList.remove("visible-group");
        group1Div.classList.add("hidden-group");

        setTimeout(() => {
            group2Div.classList.add("visible-group");
            group2Div.classList.remove("hidden-group");
        }, 0.01); // Задержка, чтобы дождаться окончания анимации скрытия
    } else {
        group2Div.classList.remove("visible-group");
        group2Div.classList.add("hidden-group");

        setTimeout(() => {
            group1Div.classList.add("visible-group");
            group1Div.classList.remove("hidden-group");
        }, 0.01); // Задержка, чтобы дождаться окончания анимации скрытия
    }
}


setInterval(toggleDiv, 3000);


