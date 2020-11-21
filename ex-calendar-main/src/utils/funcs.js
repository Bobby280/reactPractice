const enToNumber = (en) => {
	let result = null;
	switch (en) {
		case "January":
			result = 1;
			break;
		case "February":
			result = 2;
			break;
		case "March":
			result = 3;
			break;
		case "April":
			result = 4;
			break;
		case "May":
			result = 5;
			break;
		case "June":
			result = 6;
			break;
		case "July":
			result = 7;
			break;
		case "August":
			result = 8;
			break;
		case "September":
			result = 9;
			break;
		case "October":
			result = 10;
			break;
		case "November":
			result = 11;
			break;
		case "December":
			result = 12;
			break;
		default:
			result = 0;
	}
	return result;
};

const numberToEn = (number) => {
	let result = null;
	switch (number) {
		case 1:
			result = "January";
			break;
		case 2:
			result = "February";
			break;
		case 3:
			result = "March";
			break;
		case 4:
			result = "April";
			break;
		case 5:
			result = "May";
			break;
		case 6:
			result = "June";
			break;
		case 7:
			result = "July";
			break;
		case 8:
			result = "August";
			break;
		case 9:
			result = "September";
			break;
		case 10:
			result = "October";
			break;
		case 11:
			result = "November";
			break;
		case 12:
			result = "December";
			break;
		default:
			result = 0;
	}
	return result;
};

const getWeek = (date) => {
	let result;
	switch (date) {
		case 1:
			result = "MON";
			break;
		case 2:
			result = "TUE";
			break;
		case 3:
			result = "WED";
			break;
		case 4:
			result = "THU";
			break;
		case 5:
			result = "FRI";
			break;
		case 6:
			result = "SAT";
			break;
		case 0:
			result = "SUN";
			break;
		default:
			result = "";
	}
	return result;
};

const getWeekNum = (week) => {
	let result;
	switch (week) {
		case "SUN":
			result = 7;
			break;
		case "MON":
			result = 1;
			break;
		case "TUE":
			result = 2;
			break;
		case "WED":
			result = 3;
			break;
		case "THU":
			result = 4;
			break;
		case "FRI":
			result = 5;
			break;
		case "SAT":
			result = 6;
			break;
		default:
			result = "";
	}
	return result;
};

export { enToNumber, numberToEn, getWeek, getWeekNum };
