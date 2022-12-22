import { saveTokenLocalStorage } from '../../constants/token-persistence';
import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const postUserLogin = async (user, navigate, setToken) => {
	try {
		const res = await fetch(API_FETCH.USER_LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (res.status === 200) {
			const { token } = await res.json();
			setToken(token);
			saveTokenLocalStorage('jwt', token);
			navigate('/');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserLogin;
