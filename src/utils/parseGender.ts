export const parseGenderByID = (gender: string | number) => {
	return gender === "ذكر" ? 1 : 2;
};

export const parseGender = (gender: string) => {
	switch (gender) {
		case "ذكر":
			return "male";
		case "انثى":
			return "female";
		case "غير محدد":
			return "not specify";
	}
};
