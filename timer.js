const startTimerButton = document.querySelector('#startTimerButton');
const resetTimerButton = document.querySelector('#resetTimerButton');
const setTimer = document.querySelector('#setTimer');
let timer;
let minutes;
let seconds;
let display = document.querySelector('#time');

function startTimer(duration, display) {
    timer = duration;
    setInterval( () => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        if (timer == 0) {
          alert("Time's up! Press OK when you're ready to begin again.");
        }
    }, 1000);
}

startTimerButton.addEventListener('click', () => {
    let timerLength = 60 * setTimer.value;
    startTimer(timerLength, display);
});
