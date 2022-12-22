import { clearTokenLocalStorage } from '../../constants/token-persistence';
import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const deleteUser = async (
	token,
	user,
	setToken,
	setUser,
	setContent,
	navigate
) => {
	try {
		const res = await fetch(API_FETCH.DELETE_USER, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(user)
		});
		if (res.status === 200) {
			clearTokenLocalStorage('jwt');
			setToken(undefined);
			setUser(undefined);
			setContent(undefined);
			navigate('/');
			emitEvent('user deleted');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		}
	} catch (error) {
		console.log(error);
	}
};

export default deleteUser;
