export default function formatDate(date) {
    if (new Date() - date < 60000) {
        return 'now';
    } else if (new Date() - date < 86400000) {
        return getTime(date);
    } else if (new Date() - date < 86400000*2) {
        return 'yesterday';
    } else if (new Date() - date < 604800000) {
        return getDayOfWeek(date);
    } else {
        return getDayMon(date);
    }
}

function getTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timePeriod = '';

    if (hours >= 12) {
        timePeriod = 'pm';
    } else {
        timePeriod = 'am';
    }

    // Convert the hours to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    // Add leading zeros if necessary
    const formattedMinutes = String(minutes).padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}${timePeriod}`;

    return formattedTime;
}

function getDayOfWeek(date) {
    const weekdayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const dayOfWeek = date.getDay();
    const weekday = weekdayNames[dayOfWeek];

    return weekday;
}

function getDayMon(date) {
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    const monthIndex = date.getMonth();
    const day = date.getDate();

    const formattedDate = `${monthNames[monthIndex]} ${day}`;

    return formattedDate;
}