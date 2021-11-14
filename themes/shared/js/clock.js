/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";
    console.log("JavaScript ready.");
    const clockBody = document.getElementsByClassName("clock-body");
    const clockHours = document.getElementsByClassName("clock-hours");
    const clockMinutes = document.getElementsByClassName("clock-minutes");
    const clockSeconds = document.getElementsByClassName("clock-seconds");
    const setClockPointers = function () {
        const currentDate = new Date();
        const currentHour = currentDate.getHours() % 12;
        const currentMinutes = currentDate.getMinutes();
        const currentSeconds = currentDate.getSeconds();
        const currentHoursDeg = (360 / 12 * currentHour - 90) % 360;
        const currentMinutesDeg = (360 / 60 * currentMinutes - 90) % 360;
        const currentSecondsDeg = (360 / 60 * currentSeconds - 90) % 360;

        for (let i = 0; i < clockBody.length; i++) {
            clockBody[i].setAttribute("title", currentDate.toLocaleString("en-GB"));
        }
        for (let i = 0; i < clockMinutes.length; i++) {
            clockMinutes[i].style.setProperty("transform", "rotate(" + currentMinutesDeg + "deg)");
        }
        for (let i = 0; i < clockHours.length; i++) {
            clockHours[i].style.setProperty("transform", "rotate(" + currentHoursDeg + "deg)");
        }
        for (let i = 0; i < clockSeconds.length; i++) {
            clockSeconds[i].style.setProperty("transform", "rotate(" + currentSecondsDeg + "deg)");
            // clockMinutes[i].style.setProperty("transform", `rotate(&{currentMinutesDeg}deg)`);
        }
    };

    setClockPointers();
    window.setInterval(setClockPointers, 1000);
}());
