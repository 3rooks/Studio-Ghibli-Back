import { getTokenLocalStorage } from '../../constants/token-persistence';
import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const getUserProfile = async (token, setUser) => {
	const tokenLocal = getTokenLocalStorage();

	try {
		const res = await fetch(API_FETCH.GET_USER_PROFILE, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			}
		});

		if (res.status === 200) {
			const { results } = await res.json();
			setUser(results);
		} else if (res.status === 401) {
			tokenLocal || emitEvent('user unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default getUserProfile;
