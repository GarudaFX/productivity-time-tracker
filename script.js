const secondsView = document.getElementById("seconds");
const minutesView = document.getElementById("minutes");
const hoursView = document.getElementById("hours");

let seconds = 1, minutes = 0, hours = 0;
const maxTime = 60, ms = 1000

const timer = () => {
    hoursView.innerText = hours
    minutesView.innerText = minutes
    secondsView.innerText = seconds
    setTimeout(() => {
        seconds++
        if(seconds < maxTime) {
            timer()
        } else {
            minutes += 1
            seconds = 1;
            timer()
        } 
    }, ms)

    if(minutes > maxTime) {
        hours += 1
        minutes = 1
        timer()
    } 
}

timer()
