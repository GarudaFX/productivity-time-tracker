const secondsDisplay = document.getElementById('seconds');
const minutesDisplay = document.getElementById('minutes');
const hoursDisplay = document.getElementById('hours');

var time,seconds = 1,maxTime = 60,ms = 1000;

//Main function for seconds counter
function timer() {
    setInterval(function() {
        secondsDisplay.innerText = seconds;
        seconds++; //This will increment variable second after 1000 milliseconds count;
        if(seconds > maxTime) { //Since the maximum seconds interval is 60 seconds, if it exceeds 60 seconds
            //It will reset the counter
            clearInterval(timer);
        }
    }, ms); //This will stand out as the delay before incrementing seconds counter
}

function minutesTimer(seconds) {
    var minutes = 1;
    if(seconds > maxTime) {
        minutes++;
        minutesDisplay.innerText = minutes;
        if(minutes >= maxTime) {
            hoursTimer(seconds,minutes);
            minutes = 0;
        }
    }
}

function hoursTimer(seconds,minutes) {
    var hours = 1;
    if(seconds > maxTime && minutes > maxTime) {
        hours++
        hoursDisplay.innerText = hours;
    }
}