class DateTimeHelper {
	static getTimeAgoString(dateString) {
		const currentTime = new Date();
		const timeAgo = new Date(dateString);
		const timeDifference = currentTime - timeAgo;
		const secondsAgo = Math.floor(timeDifference / 1000);
		const minutesAgo = Math.floor(secondsAgo / 60);
		const hoursAgo = Math.floor(minutesAgo / 60);
		const daysAgo = Math.floor(hoursAgo / 24);

		if (secondsAgo < 60) {
			return `${secondsAgo} second${secondsAgo === 1 ? '' : 's'}`;
		}
		if (minutesAgo < 60) {
			return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'}`;
		}
		if (hoursAgo < 24) {
			return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'}`;
		}
		return `${daysAgo} day${daysAgo === 1 ? '' : 's'}`;
	}
	  
}

export default DateTimeHelper;