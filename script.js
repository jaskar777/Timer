let countdown;
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');

const minutesinput = document.querySelector('.minutes');

const secondsinput = document.querySelector('.seconds');

const timerdisplay = document.querySelector('.timer');

startBtn.addEventListener('click', startcountdown);

stopBtn.addEventListener('click', stopcountdown);

function startcountdown() {
    clearInterval(countdown); //clearing the previous interval
    let min = minutesinput.value ||0; //initial value is 0

    let sec = secondsinput.value || 0;   //initila value is 0
    
    let totalTime = min * 60 + parseInt(sec); //total time in seconds  10*60+12=612

    countdown = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);//612/60=10
        console.log(minutes);

        let seconds = totalTime % 60; //612%60=12 remainder sec

        timerdisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (totalTime <= 0) {
            clearInterval(countdown);
            timerdisplay.textContent = "Time Up!";
            alert("Time Up!");
        }
        totalTime--;

    }, 1000);

}

function stopcountdown() { 
    clearInterval(countdown);  
}