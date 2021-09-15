const countDown = () => {
    // Set the date we're counting down to
    const countDownDate = new Date("Nov 8, 2021 00:00:00").getTime();
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    const second = 1000;
    const minutes = second * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timedays = Math.floor(distance / days);
    let timehours = Math.floor((distance % days) / hours);
    let timeminutes = Math.floor((distance % hours) / minutes);
    let timeseconds = Math.floor((distance % minutes) / second);

    timedays = timedays < 10 ? "0" + timedays : timedays;
    timehours = timehours < 10 ? "0" + timehours : timehours;
    timeminutes = timeminutes < 10 ? "0" + timeminutes : timeminutes;
    timeseconds = timeseconds < 10 ? "0" + timeseconds : timeseconds;

    const setValue = (id, value) => {
        document.getElementById(id).innerHTML = value;
    }

    setValue('days', timedays);
    setValue('hours', timehours);
    setValue('minutes', timeminutes);
    setValue('seconds', timeseconds);
}


setInterval(countDown, 1000);

