export const parseMonth = (month: string) => {
	switch (month) {
		case "كانون الثاني":
			return "01";
		case "شباط":
			return "02";
		case "اذار":
			return "03";
		case "نيسان":
			return "04";
		case "ايار":
			return "05";
		case "حزيران":
			return "06";
		case "تموز":
			return "07";
		case "آب":
			return "08";
		case "ايلول":
			return "09";
		case "تشرين الاول":
			return "10";
		case "تشدرين الثاني":
			return "11";
		case "كانون الاول":
			return "12";
	}
};

export const parseMonthsNumbers = (month: string) => {
	switch (month) {
		case "01":
			return "كانون الثاني";
		case "02":
			return "شباط";
		case "03":
			return "اذار";
		case "04":
			return "نيسان";
		case "05":
			return "ايار";
		case "06":
			return "حزيران";
		case "07":
			return "تموز";
		case "08":
			return "آب";
		case "09":
			return "ايلول";
		case "10":
			return "تشرين الاول";
		case "11":
			return "تشدرين الثاني";
		case "12":
			return "كانون الاول";
	}
};
