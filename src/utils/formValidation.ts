// NEED ENHANCEMENT FROM MOHAMMED
export const checkMinMax = (
	minLimit: number,
	maxLimit: number,
	value: string,
	minMsg: string,
	maxMsg: string
): string => {
	if (value.length < minLimit) {
		return minMsg;
	} else if (value.length > maxLimit) {
		return maxMsg;
	}
	return "";
};

export const checkValueExistence = (value: string, msg: string) => {
	return !value ? msg : "";
};

export const checkPattern = (
	pattern: RegExp,
	value: string,
	msg: string
): string => {
	return pattern.test(value) ? "" : msg;
};

export const checkValuesMatching = (
	value1: string,
	value2: string,
	msg: string
): string => {
	return value1 === value2 ? "" : msg;
};

export const noNumbers = (value: string, msg: string,pattern:RegExp) => {
	return value.match(pattern) ? msg : "";
};
