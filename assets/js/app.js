let playBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let h1 = document.querySelector('h1');



let timer;
let minute = 0;
let second = 0;




playBtn.addEventListener('click', () => {
    timer = setInterval(() => {

        if (second < 59) {
            second++;
        }
        else if (second == 59) {
            second = 0;
            if (minute < 59) {
                minute++;
            }
            else if (minute == 59) {
                minute = 0;
            }

        }

        console.log(minute, second);
        h1.innerText = `${minute} ${second}`;

    }, 1000);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    minute = 0;
    second = 0;
    clearInterval(timer);
    h1.innerText = `${minute} : ${second}`;


});