export function timeAgo(unixTimestamp) {
    const now = new Date();
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
    const diffInSeconds = Math.floor((now - date) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000; // Approximate value (30 days)
    const secondsInYear = 31536000; // Approximate value (365 days)

    if (diffInSeconds < secondsInMinute) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInMonth) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < secondsInYear) {
        const months = Math.floor(diffInSeconds / secondsInMonth);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(diffInSeconds / secondsInYear);
        const remainingMonths = Math.floor((diffInSeconds % secondsInYear) / secondsInMonth);
        return `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''} ago`;
    }
}

