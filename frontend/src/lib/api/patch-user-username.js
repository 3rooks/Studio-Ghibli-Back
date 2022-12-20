import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';
import getUserProfile from './get-user-profile';

const pathUsername = async (token, user, setUser) => {
	try {
		const res = await fetch(API_FETCH.PATCH_USERNAME, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(user)
		});

		if (res.status === 202) {
			getUserProfile(token, setUser);
			emitEvent('username updated');
		} else if (res.status === 400) {
			emitEvent('wrong inputs');
		} else if (res.status === 401) {
			emitEvent('user unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default pathUsername;
