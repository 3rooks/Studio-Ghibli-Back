import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';
import getUserProfile from './get-user-profile';

const pathPass = async (token, user, setUser) => {
	try {
		const res = await fetch(API_FETCH.PATCH_PASS, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(user)
		});

		if (res.status === 202) {
			await getUserProfile(token, setUser);
			emitEvent('password updated');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default pathPass;
