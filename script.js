const secondsView = document.getElementById("seconds");
const minutesView = document.getElementById("minutes");
const hoursView = document.getElementById("hours");

let seconds = 0, minutes = 0, hours = 0;
const maxTime = 60

const timer = () => {

    setTimeout(() => {
        seconds++
        if(seconds < maxTime) {
            timer()
        } else {
            minutes += 1
            seconds = 0;
            timer()
        } 
    }, 1000)

    if(minutes > 59) {
        hours += 1
        minutes = 0
    } 

    if(seconds <= 9) {
        secondsView.innerText = "0"+seconds
    } else {
        secondsView.innerText = seconds
    }

    if(minutes <= 9) {
        minutesView.innerText = "0"+minutes
    } else {
        minutesView.innerText = minutes
    }

    if(hours <= 9) {
        hoursView.innerText = "0"+hours
    } else {
        hoursView.innerText = hours
    }
}

timer()
