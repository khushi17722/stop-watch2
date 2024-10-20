let minute = 0;
let second = 0;
let hour = 0;
let isRunning = false;
let intervalId;

const time = document.getElementById('time');
const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');
const resetbtn = document.getElementById('resetbtn');

const formatetime = (num) => (num < 10 ? `0${num} ` : num);


const timer = () => {
    intervalId = setInterval(() => {

        if (!isRunning) {
            second++;
            if (second === 60) {
                second = 0;
                minute++;
                if (minute === 60) {
                    minute = 0;
                    hour++;
                }
            }
            time.innerHTML = `${formatetime(hour)}:${formatetime(minute)}:${formatetime(second)}`;
        }
    }, 1000)
}

startbtn.addEventListener('click', () => {
    timer();
})
stopbtn.addEventListener('click', () => {

    clearInterval(intervalId);
    isRunning = false;
})
resetbtn.addEventListener('click', () => {
    timer();
    clearInterval(intervalId);
    isRunning = false;
    hour = 0;
    minute = 0;
    second = 0;
    time.innerHTML = '00:00:00';
})