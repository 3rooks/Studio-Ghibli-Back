import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const deleteUser = async (token, user) => {
	try {
		const res = await fetch(API_FETCH.DELETE_USER, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(user)
		});

		if (res.status === 202) {
			emitEvent('user deleted');
		} else if (res.status === 400) {
			emitEvent('wrong inputs');
		} else if (res.status === 401) {
			emitEvent('user unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default deleteUser;
