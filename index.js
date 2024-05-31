
const displayDate = document.getElementById('displayDate');

setInterval(timeZone, 1000);

function timeZone() {

    let date = new Date();
    displayDate.innerHTML = timeFormat(date);

    function timeFormat(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let amOrPm = hours >= 12 ? 'PM' : 'AM';

        hours = formatZeros(hours);
        minutes = formatZeros(minutes);
        seconds = formatZeros(seconds);

        hours = (hours % 12) || 12;

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZeros(time) {
        time = time.toString();
        return time.length < 2 ? '0' + time : time;
    }
}

timeZone();