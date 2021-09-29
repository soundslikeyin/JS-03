function businessHours(dayNumber, hourNumber) {
    if ((dayNumber <= 5) && (dayNumber > 0)) {
        if ((hourNumber >= 9) && (hourNumber <= 18)) {
            window.alert("Yes, it is business hours.");
            console.log("Business hours.");
        }
        else {
            window.alert("Sorry. It is a business day, but it is not business hours.");
            console.log("Not business hours.");
        }
    }
    else {
        window.alert("Sorry. That is not a business day.")
        console.log("Not business day.");
    }
}

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    let currentDayNumber = (yearDayNumber % 7) + janFirstDayNumber - 1;
    if (currentDayNumber > 6 ) {
        currentDayNumber = currentDayNumber - 7;
    }
    // console.log("janFirstDayNumber is " + janFirstDayNumber);
    // console.log("Current Day Number is " + currentDayNumber);
    return currentDayNumber;
}

function yearBusinessHours(yearDayNumber, hourNumber, yearNumber) {
    const janFirstDayNumber = getJanFirstDay(yearNumber);
    const dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber, yearNumber);
    return businessHours(dayNumber, hourNumber);
}

function getJanFirstDay(yearNumber) {
    const janFirstDay = new Date();
    janFirstDay.setDate(1);
    janFirstDay.setMonth(0);
    janFirstDay.setFullYear(yearNumber);
    // console.log("Jan First day is " + janFirstDay);
    const janFirstDayNumber = janFirstDay.getDay();
    return janFirstDayNumber;
}

function getDateDayNumber(dateNumber, monthNumber, yearNumber) {
    const queryDate = new Date();
    queryDate.setDate(dateNumber);
    queryDate.setMonth(monthNumber);
    queryDate.setFullYear(yearNumber);
    const queryDateDayNumber = queryDate.getDay();
    // console.log("query date is" + queryDate);
    // console.log("day of the week is" + queryDateDayNumber );
    return queryDateDayNumber;
}

document.getElementById("query-year-day-number").addEventListener("click", (e) => {
    const yearDayNumber = window.prompt("Please enter the day of the year (0-365): ");
    const hourNumber = window.prompt("Please enter the hour (0-23): ");
    const yearNumber = window.prompt("Please enter the year: ");
    return yearBusinessHours(yearDayNumber, hourNumber, yearNumber);
});

document.getElementById("query-date").addEventListener("click", (e) => {
    const dateNumber = window.prompt("Please enter the date (1-31): ");
    const monthNumber = Number(window.prompt("Please enter the month (1-12): "))-1;
    const hourNumber = window.prompt("Please enter the hour (0-23): ");
    const yearNumber = window.prompt("Please enter the year: ");
    const dayNumber = getDateDayNumber(dateNumber, monthNumber, yearNumber);
    return businessHours(dayNumber, hourNumber);

});
