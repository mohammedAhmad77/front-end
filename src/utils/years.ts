const year = new Date().getFullYear();
export const years = Array.from(new Array(50), (val, index) => year - index);
