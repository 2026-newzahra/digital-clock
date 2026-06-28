function displayTime() {
    var dateTime = new Date();

    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    var session = document.getElementById("session");

    if (hrs >= 12) {
        session.innerText = "PM";
    } else {
        session.innerText = "AM";
    }

    if (hrs == 0) {
        hrs = 12;
    } else if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs < 10) hrs = "0" + hrs;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    document.getElementById("hours").innerText = hrs;
    document.getElementById("minutes").innerText = min;
    document.getElementById("seconds").innerText = sec;
}

displayTime();
setInterval(displayTime, 1000);