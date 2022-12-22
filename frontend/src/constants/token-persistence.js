export const saveTokenLocalStorage = (key, data) => {
	window.localStorage.setItem(key, JSON.stringify(data));
};

export const clearTokenLocalStorage = (key) => {
	window.localStorage.removeItem(key);
};

export const getTokenLocalStorage = () => {
	const token = window.localStorage.getItem('jwt');
	if (!token) return undefined;
	return JSON.parse(token);
};
